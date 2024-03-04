/*
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-04 16:39:48
 * @description: nuxt.config
 */
import { loadEnv } from "vite";

/**
 * 环境变量引入nuxt客户端的方案 通过 useRuntimeConfig().public使用
 */
/**
 * 环境变量接口
 */
interface VITE_ENV_CONFIG {
  VITE_NODE_ENV: string;
  VITE_APP_ENV: string;
}
const envScript = (process.env as any).npm_lifecycle_script.split(" "); // 启动命令字符串
const envName = envScript[envScript.length - 1]; // 当前运行环境 对应文件名
const envData = loadEnv(envName, "env") as unknown as VITE_ENV_CONFIG;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },

  // 环境变量 public可在客户端useRuntimeConfig().public访问
  runtimeConfig: {
    public: {
      ...envData,
    },
  },

  // 配置modules会自动加载
  modules: [
    // pinia plugin - https://pinia.esm.dev
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    // "@nuxtjs/tailwindcss",
    // "nuxt-icon",
    '@nuxt/ui',
    '@nuxt/image',
  ],

  // 配置pinia持久化 存储在session内，在store/*ts内设置无效
  piniaPersistedstate: {
    storage: "sessionStorage",
  },

  // 配置tailwindcss
  tailwindcss: {
    configPath: "./tailwind.config.js",
    cssPath: "./src/assets/styles/tailwind.css",
  },

  vite: {
    // envDir: "~/src/env",
  },

  // css: [
  //   '@/assets/styles/tailwind.css'
  // ],

  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
    },
  },

  // 可配置插件执行时机 或 在插件文件名添加后缀 无后缀都执行 client客户端 server服务器
  // plugins: [{ src: "~/plugins/theme.client.js", mode: "client" }],
});
