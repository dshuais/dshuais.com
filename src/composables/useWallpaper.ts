/*
* @Author: dushuai
* @Date: 2024-02-27 17:28:59
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-27 18:04:28
* @description: 壁纸切换方式
*/

import { useSettings } from "~/store/settings"

export const useWallpaper = () => {

  const { wallpaper, wallpaperUrl } = storeToRefs(useSettings())

  /**
   * 壁纸数量 可用node计算img/home内数量（偷懒没做）
   */
  const wallpapers = ref<number>(46)

  /**
   * 设置切换方式
   * @param {WallpaperType} type 
   * @param {string} url
   */
  const setWallpaper = (type: App.WallpaperType, url?: string) => {
    if (type === 'set' && !url) console.error('url is undefined!')
    wallpaper.value = type
    wallpaperUrl.value = url as string
  }

  /**
   * 只设置url
   * @param url 
   */
  const setWallpaperUrl = (url: string) => {
    wallpaperUrl.value = url
  }

  /**
   * 重置切换方式
   */
  const resetWallpaper = () => {
    wallpaper.value = 'auto'
    wallpaperUrl.value = ''
  }

  return {
    wallpaper, wallpaperUrl, wallpapers,
    setWallpaper, resetWallpaper, setWallpaperUrl
  }

}
