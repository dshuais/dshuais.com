/*
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-24 22:25:03
 * @description: store
 */

export const useAppStore = defineStore('app', () => {
  // state
  const token = ref<string>('')
  const hasLoading = ref<boolean>(true)

  // action
  /** 
   * 设置token
   * @param {string} tk token
   */
  function SET_TOKEN(tk: string) {
    token.value = tk
  }

  /**
   * 清除token
   */
  function REMOVE_TOKEN() {
    token.value = ''
  }

  return {
    token, hasLoading,
    SET_TOKEN, REMOVE_TOKEN
  }
}, {
  persist: { // persist:true 默认保存在local内
    key: 'app',
    // storage: 'sessionStorage'
  }
})
