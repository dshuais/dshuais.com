/*
 * @Author: dushuai
 * @Date: 2024-03-05 16:35:21
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-05 16:35:32
 * @description: 一些开放式api
 */

/**
 * 一言
 */
export const getHitokoto = async () => {
  const res = await fetch("https://v1.hitokoto.cn");
  return await res.json();
}
