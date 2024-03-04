/*
 * @Author: dushuai
 * @Date: 2024-03-04 15:59:22
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-04 16:04:59
 * @description: useNotification
 */
export const useNotification = () => {
  const toast = useToast()

  /**
   * 消息提示
   * @param title 
   * @param timeout 
   */
  function showMessage(title: string, timeout: number = 3500) {
    toast.add({
      title,
      timeout,
      color: 'gray',
      ui: {
        "background": 'bg-[#88888860]',
        "ring": "",
        "shadow": "",
        "title": "text-[#fff]",
        "progress": {
          "background": "bg-[#55555590]",
        }
      }
    })
  }

  return {
    toast,
    showMessage
  }
}
