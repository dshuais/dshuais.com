
/*
 * @Author: dushuai
 * @Date: 2023-12-10 11:53:46
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-27 18:07:32
 * @Description: 公共配置store
 */
export const useSettings = defineStore(
  "settings",
  () => {
    // store
    const theme = ref<string>();
    /**
     * 壁纸切换方式
     * auto 自动随机
     * set  用户选择
     */
    const wallpaper = ref<App.WallpaperType>('auto');
    const wallpaperUrl = ref<string>('');

    // action
    function SET_THEME(th: string) {
      theme.value = th;
    }

    return {
      theme, wallpaper, wallpaperUrl,
      SET_THEME,
    };
  },
  {
    persist: {
      key: "settings",
    },
  }
);
