import { defaultThemeConfig } from "~/utils/theme";
import type { Theme } from "~/utils/theme";

/*
 * @Author: dushuai
 * @Date: 2023-12-10 11:53:46
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-10 12:21:31
 * @Description: 公共配置store
 */
export const useSettings = defineStore(
  "settings",
  () => {
    // store
    const theme = ref<Theme>(defaultThemeConfig);

    // action
    function SET_THEME(the: Theme) {
      console.log("set");
      theme.value = the;
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
