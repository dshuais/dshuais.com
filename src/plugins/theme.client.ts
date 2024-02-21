/*
 * @Author: dushuai
 * @Date: 2023-12-10 20:49:41
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-10 20:58:04
 * @Description: 描述
 */
import { setTheme } from "~/utils/theme";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("执行代码");
  setTheme();
});
