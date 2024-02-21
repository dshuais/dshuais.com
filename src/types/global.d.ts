/*
 * @Author: dushuai
 * @Date: 2023-04-17 17:19:45
 * @LastEditors: dushuai
 * @LastEditTime: 2023-04-17 17:22:44
 * @description: Window
 */
interface Window {
  mozRequestAnimationFrame: Function,

  webkitRequestAnimationFrame: Function,

  msRequestAnimationFrame: Function,

  mozCancelAnimationFrame: Function
}