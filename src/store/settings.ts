
/*
 * @Author: dushuai
 * @Date: 2023-12-10 11:53:46
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-21 16:29:06
 * @Description: 公共配置store
 */
export const useSettings = defineStore(
  "settings",
  () => {
    // store
    const theme = ref<string>();

    // action
    function SET_THEME(th: string) {
      theme.value = th;
    }

    return {
      theme,
      SET_THEME,
    };
  },
  {
    persist: {
      key: "settings",
    },
  }
);
