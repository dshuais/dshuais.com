/**
 * 格式化时间 Date 转化为指定格式的String
 * 年(y)可以用 1-4 个占位符、月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、毫秒(S)只能用 1 个占位符(是 1-3 位的数字)、周(E)、季度(q)可以用 1-2 个占位符
 * @param {string | number | Date} [date] 时间 可选，默认为当前时间
 * @param {string} [fmt] 格式 可选，默认为 yyyy-MM-dd HH:mm:ss
 * @returns {string}  时间date as fmt
 *
 * formatDate('2023-03-23 15:30:59:60', 'yyyy-MM-dd HH:mm:ss:S EEE qq')
 * // => 2023-03-23 15:30:59:60 星期四 01
 */
export const formatDate = (
  date?: string | number | Date,
  fmt?: string
): string => {
  if (date === void 0) date = new Date();
  if (fmt === void 0) fmt = "yyyy-MM-dd HH:mm:ss";
  if (typeof date === "string") {
    date = new Date(date);
  } else if (typeof date === "number") {
    date = new Date(date);
  }
  date = formatTimestamp(date);

  type O = {
    [key in string]: number;
  };
  var o: O = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    "H+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  var week = {
    "0": "\u65e5",
    "1": "\u4e00",
    "2": "\u4e8c",
    "3": "\u4e09",
    "4": "\u56db",
    "5": "\u4e94",
    "6": "\u516d",
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "\u661f\u671f"
          : "\u5468"
        : "") + week[(date.getDay() + "") as keyof typeof week]
    );
  }
  for (var k in o) {
    // type K = typeof o[keyof typeof o]
    if (new RegExp("(" + k + ")").test(fmt)) {
      let ff: any;
      if (RegExp.$1.length === 1) ff = o[k];
      else ff = ("00" + o[k]).substr(("" + o[k]).length);
      fmt = fmt.replace(RegExp.$1, ff);
    }
  }
  return fmt;
};

type DateParams = {
  [key in string]: number | string;
};
/**
 * 获取日期详情
 * @param {string | number | Date} date
 * @returns Object
 */
export const getDateParams = (date: string | number | Date): DateParams => {
  const newDate = formatTimestamp(new Date(date));
  const weekDay = {
    0: "日",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
  };
  let dateParams: DateParams = {
    y: newDate.getFullYear(),
    m: newDate.getMonth() + 1,
    d: newDate.getDate(),
    h: newDate.getHours(),
    mm: newDate.getMinutes(),
    ss: newDate.getSeconds(),
    w: weekDay[newDate.getDay() as keyof typeof weekDay],
  };

  for (const key in dateParams) {
    if (
      Object.hasOwnProperty.call(dateParams, key) &&
      key !== "y" &&
      key !== "w"
    ) {
      dateParams[key] = String(dateParams[key]).padStart(2, "0");
    }
  }
  return dateParams;
};

/**
 * 获取日期时间戳（兼容老版本ios）
 * @param {string | number} date 日期 可选，默认当天（理想格式yyyy-d-m hh:mm:ss）
 * @returns {number} 时间戳
 */
export const getTimestamp = (date?: string | number): number => {
  if (typeof date == "number" || !date) date = formatDate(date);
  return new Date(date.replace(/-/g, "/")).getTime();
};

/**
 * 格式化时区问题 按北京+8时间
 * @param {string|number|Date} date 时间
 * @param {number} offset 相差的时区 北京时间+8
 * @returns {Date}
 */
export const formatTimestamp = (
  date: string | number | Date,
  offset: number = 8
): Date => {
  const localDate = new Date(date);
  const localmesc = localDate.getTime();
  const localOffset = localDate.getTimezoneOffset() * 60000;
  const utc = localOffset + localmesc;
  const calctime = utc + 3600000 * offset;
  return new Date(calctime);
};

/**
 * 解析url参数
 * @param {string} [url] url 可选，默认为window.location.search（可用''当占位符）
 * @param {string} [name] 字段名 可选，默认全部
 * @returns {string | object} 传了name返回值string，不传则为object
 */
export const getUrlParam = (url?: string, name?: string): string | object => {
  if (!url || url === "") url = window.location.search;
  url = decodeURIComponent(url);
  url = url.substring(url.indexOf("?") + 1);
  const obj: { [key: string]: string } = {};
  const urlList: string[] = url.split("&");
  if (!url || url === "") return obj;
  urlList.forEach((url) => {
    const q: string[] = url.split("=");
    obj[q[0]] = q[1];
  });
  if (name) return obj[name];
  return obj;
};

/**
 * 获取随机字符串
 * @param {number} [e] 长度 可选，默认32位
 * @returns {string} 随机字符串
 */
export const randomString = (e: number = 32): string => {
  var t: string = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a: number = t.length,
    n: string = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
};

/**
 * 生成随机且不重复的的数组
 * @param {number} num 要生成的随机数的长度
 * @param {number} min 随机数的最小值 默认10
 * @param {number} max 随机数的最大值 默认50
 * @returns {number[]} number[].length = num
 */
export const INDEXLIST = (
  num: number,
  min: number = 10,
  max: number = 50
): number[] => {
  let RLIST: number[] = [];
  while (RLIST.length < num) {
    let MRNUMBER: number = Math.floor(Math.random() * (max - min) + min);
    if (RLIST.indexOf(MRNUMBER) == -1) {
      RLIST.push(MRNUMBER);
    }
  }
  return RLIST;
};

/**
 * 生成随机数组
 * @param {number} num 位数 默认五十位
 * @returns {number[]} number[].length = num
 */
export const FIVETEEN = (num: number): number[] => {
  let tempArr: number[] = [];
  for (let i = 0; i < num; i++) {
    tempArr.push(Math.floor(Math.random() * 99));
  }
  return tempArr;
};

/**
 * 根据枚举数据val获取key
 * @param {T} enumObj 枚举对象
 * @param {T[keyof T]} val 枚举的数据
 * @returns {keyof T} key
 */
export const getEnumKey = <R extends string, T extends { [key: string]: R }>(
  enumObj: T,
  val: T[keyof T]
): keyof T => {
  const keys = Object.keys(enumObj);
  if (keys.length < 0) return "";
  const key = keys.filter((k) => enumObj[k] === val);
  return key.length > 0 ? key[0] : "";
};

/**
 * 复制方法
 * @param {string} text 要复制的内容
 * @param {boolean} origin 通过什么类型复制 input:false复制内容在一行 textarea:true可换行 可选，默认textarea
 * @returns {Promise<boolean>} 是否复制成功
 */
export const $copy = (
  text: string,
  origin: boolean = true
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    let input: HTMLInputElement | HTMLTextAreaElement;
    if (origin) input = document.createElement("textarea");
    else input = document.createElement("input");

    input.setAttribute("readonly", "readonly");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
      resolve(true);
    } else {
      reject(false);
    }
    document.body.removeChild(input);
  });
};

/**
 * 获取图片路径
 * @param {string} name 图片名称，绝对与assets/img/文件夹
 * @returns {string} 图片的绝对路径
 * @Readmore https://vitejs.cn/guide/assets.html#new-url-url-import-meta-url
 */
export const getImageUrl = (name: string): string => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};

/**
 * 页面滚动 等同于element.scrollTo() 兼容性比scrollTo()好
 * @param {number} scroll 将要滚动到的 距离顶部的距离
 * @param {string} id 滚动区域的id 默认#app
 * @param {number} duration 滚动时间 可选，默认2.5毫秒
 * @param {number} offset 安全范围，范围内不进行滚动 可选，默认10
 */
export const scrollPageTo = (
  scroll: number,
  id: string = "app",
  duration: number = 250,
  offset: number = 10
): void => {
  if (!document.getElementById(id)) return;

  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  const cancelAnimationFrame =
    window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  const scale: number = document.body.clientWidth / 375;

  const totalScrollDistance: number = scroll * scale;
  const scrollTop: number = document.getElementById(id)!.scrollTop;
  const isDown: boolean = scrollTop <= totalScrollDistance;
  let scrollY: number = scrollTop,
    oldTimestamp: number | null = null;

  if (
    (scrollTop - totalScrollDistance <= offset &&
      scrollTop - totalScrollDistance >= 0) ||
    (totalScrollDistance - scrollTop <= offset &&
      totalScrollDistance - scrollTop >= 0)
  )
    return;

  function step(newTimestamp: number): void {
    if (oldTimestamp !== null) {
      if (scrollY <= totalScrollDistance && isDown) {
        scrollY +=
          ((totalScrollDistance - scrollTop) / duration) *
          (newTimestamp - oldTimestamp);
      } else if (scrollY > totalScrollDistance && !isDown) {
        scrollY -=
          ((scrollTop - totalScrollDistance) / duration) *
          (newTimestamp - oldTimestamp);
      }
      document.getElementById(id)!.scrollTop = scrollY;
    }
    if (
      (scrollY <= totalScrollDistance && isDown) ||
      (scrollY >= totalScrollDistance && !isDown)
    ) {
      oldTimestamp = newTimestamp;
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
};

/**
 * 我的打印
 * @returns log
 */
export const ThisLog = () => (
  console.log(
    `%c
         ________                     ____________
          / ____ / /               ● / ______    
         / /    / /_        ____  __/ /
        / /___ / __ \\/ / / / _  \\/ / /_____
        \\ __  / / / / / / / / / / / \\ __  /
       ____/ / / / / /_/ / /_/ / /  ___/ /
  __________/_/ /_/______\\_____\\/_______/ 
  `,
    "color:skyblue"
  ),
  console.group(
    "%c[WelCome]",
    `padding: 4px 6px;
  font-weight: 600;
  border-radius: 4px;
  color:#fff;
  background-color:skyblue;`
  ),
  console.log("注意看 这个男孩叫小帅"),
  console.log("This is dshuais's website"),
  console.log("此主页and博客正在building"),
  console.log("不定时更新"),
  console.log("博主正在社畜坐牢"),
  console.log("%cLove your life, Love programming.", "color:skyblue;"),
  console.groupEnd(),
  new Date().getDay() === 4 && console.log("疯狂星期四，v我50🐶"),
  console.log(
    "%c dshuais %c V0.0.1 ",
    "padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;",
    "padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: skyblue; font-weight: bold;"
  )
);


type DateInterval = {
  info: string;
  days: number;
}

/**
 * 获取固定时间到现在间隔
 * @param date 开始日期
 * @returns {DateInterval}
 */
export function dateInterval(date: string): DateInterval {
  let startTime = new Date(date).getTime(); // 开始时间
  let endTime = new Date().getTime(); // 结束时间
  let usedTime = endTime - startTime; // 相差的毫秒数
  let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
  let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
  let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
  let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
  let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数

  return {
    info: days + '天' + hours + '时' + minutes + '分',
    days,
  }
}
