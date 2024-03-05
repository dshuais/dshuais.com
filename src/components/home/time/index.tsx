/*
 * @Author: dushuai
 * @Date: 2024-02-29 16:01:46
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-05 16:42:22
 * @description: HomeTime
 */
import Card from "~/components/card"

export default defineComponent({
  name: 'HomeTime',
  setup() {
    return () => (
      <Card class="w-full h-full flex items-center justify-center">
        HomeTime
      </Card>
    )
  }
})
