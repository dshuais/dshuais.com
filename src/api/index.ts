/*
 * @Author: dushuai
 * @Date: 2024-03-05 16:35:21
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-07 11:17:36
 * @description: 一些开放式api
 */

/**
 * 一言
 */
export const getHitokoto = async () => {
  const res = await fetch("https://v1.hitokoto.cn");
  return await res.json();
}

// 获取教书先生天气 API
// https://api.oioweb.cn/doc/weather/GetWeather
export const getOtherWeather = async () => {
  const res = await fetch("https://api.oioweb.cn/api/weather/GetWeather");
  return await res.json();
};
