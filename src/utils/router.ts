/*
 * @Author: dushuai
 * @Date: 2023-12-09 16:35:48
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-09 17:42:01
 * @Description: 路由跳转
 */
import type { NavigateToOptions } from "nuxt/dist/app/composables/router";
import type { LocationQueryRaw } from "vue-router";
import type { Pages } from "~/enums/app";

/**
 * 重写基础路由跳转 可带参数
 * @param {Pages} path 要去的路由链接
 * @param {LocationQueryRaw} params 跳转传递的参数
 */
function to(path: Pages, params?: LocationQueryRaw) {
  navigateTo({ path, query: { ...params } });
}

/**
 * 重写默认路由跳转 可带options
 * @param {Pages} path 要去的路由链接
 * @param {NavigateToOptions} options navigationTo的options参数
 */
function jump(path: Pages, options?: NavigateToOptions) {
  navigateTo(path, options);
}

/**
 * 重写replace路由跳转 可带参数
 * @param {Pages} path 要去的路由链接
 * @param {LocationQueryRaw} params 跳转传递的参数
 */
function redirect(path: Pages, params?: LocationQueryRaw) {
  const router = useRouter();
  router.replace({ path, query: { ...params } });
}

/**
 * router.back返回上一页
 */
function back() {
  const router = useRouter();
  router.back();
}

/**
 * router.go跳到某一级页面
 * @param {number} index 某一级
 */
function go(index: number) {
  const router = useRouter();
  router.go(index);
}

export { to, jump, redirect, back, go };
