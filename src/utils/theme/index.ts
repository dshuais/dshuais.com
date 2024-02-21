/*
 * @Author: dushuai
 * @Date: 2023-12-09 18:19:12
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-10 21:06:22
 * @Description: theme fun
 */
import { merge } from "lodash-es";
import { genMixColor } from "./genColor";
import { useSettings } from "~/store/settings";

const THEME_KEY = "theme";

export type Theme = {
  colors: {
    primary?: string;
    info?: string;
    warning?: string;
    success?: string;
    danger?: string;
  };
};

// 默认主题
export const defaultThemeConfig: Theme = {
  colors: {
    primary: "#FF6A00",
    info: "#eeeeee",
    warning: "#fbbd23",
    danger: "#f87272",
    success: "#36d399",
  },
};

// 设置css变量
function setStyleProperty(propName: string, value: string) {
  if (process.client) {
    const root = document.querySelector(":root") as HTMLElement;
    root?.style.setProperty(propName, value);
    // document.documentElement.style.setProperty(propName, value);
  }
}

function updateThemeColorVar({ colors }: Theme) {
  // 遍历当前主题色，生成混合色，并更新到css变量（tailwind + elementPlus）
  for (const brand in colors) {
    updateBrandExtendColorsVar(
      colors[brand as keyof Theme["colors"]] as string,
      brand
    );
  }

  function updateBrandExtendColorsVar(color: string, name: string) {
    const { DEFAULT, dark, light } = genMixColor(color);
    // 每种主题色由浅到深分为五个阶梯以供开发者使用。
    setStyleProperty(`--ds-${name}-lighter-color`, light[5]);
    setStyleProperty(`--ds-${name}-light-color`, light[3]);
    setStyleProperty(`--ds-${name}-color`, DEFAULT);
    setStyleProperty(`--ds-${name}-deep-color`, dark[2]);
    setStyleProperty(`--ds-${name}-deeper-color`, dark[4]);

    // elementPlus主题色更新
    // setStyleProperty(`--el-color-${name}`, DEFAULT);
    // setStyleProperty(`--el-color-${name}-dark-2`, dark[2]);
    // setStyleProperty(`--el-color-${name}-light-3`, light[3]);
    // setStyleProperty(`--el-color-${name}-light-5`, light[5]);
    // setStyleProperty(`--el-color-${name}-light-7`, light[7]);
    // setStyleProperty(`--el-color-${name}-light-8`, light[8]);
    // setStyleProperty(`--el-color-${name}-light-9`, light[9]);
  }
}

// 获取主题对象
export const getTheme = (): Theme => {
  const { theme: THEME, SET_THEME } = useSettings();
  // const theme = localStorage.getItem(THEME_KEY);
  // return theme ? JSON.parse(theme) : defaultThemeConfig;
  const theme = THEME;
  return theme;
};

/**
 * 设置颜色
 * @param data
 */
export const setTheme = (data: Theme = defaultThemeConfig) => {
  const { theme: THEME, SET_THEME } = useSettings();
  const oldTheme = THEME;

  // 将传入配置与旧的主题合并，以填补缺省的值
  data = merge(oldTheme, data || {});

  // 将缓存到浏览器
  // localStorage.setItem(THEME_KEY, JSON.stringify(data));
  SET_THEME(data);

  // 将主题更新到css变量中，使之生效
  updateThemeColorVar(data);
};
