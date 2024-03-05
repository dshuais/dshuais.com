/*
 * @Author: dushuai
 * @Date: 2024-02-29 16:00:48
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-05 16:44:02
 * @description: homeHitokoto
 */
import Card from "~/components/card"
import { getHitokoto } from '~/api'

export default defineComponent({
  name: 'HomeHitokoto',
  setup() {

    function getData() {
      getHitokoto()
        .then(res => {
          console.log('res', res)
        })
    }

    getData()

    return () => (
      <Card class="w-full h-full flex items-center justify-center lg:mr-6">
        homeHitokoto
      </Card>
    )
  }
})
