/*
 * @Author: dushuai
 * @Date: 2024-02-29 16:00:48
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-06 09:42:32
 * @description: homeHitokoto
 */
import Card from "~/components/card"
import { getHitokoto } from '~/api'

type Hitokoto = {
  hitokoto: string,
  from: string,
}

export default defineComponent({
  name: 'HomeHitokoto',
  setup() {

    const hitokoto = ref<Hitokoto>({
      hitokoto: '己所不欲勿施于人',
      from: 'dushuai',
    })

    function getData() {
      getHitokoto()
        .then(res => {
          hitokoto.value = {
            hitokoto: res.hitokoto,
            from: res.from,
          }
        })
    }

    getData()

    return () => (
      <Card class="w-full h-full flex items-center justify-center flex-col lg:mr-6 py-10 pl-6" onClick={getData}>
        <div class="text-gray-100 w-full flex justify-start">{hitokoto.value.hitokoto}</div>
        <div class="w-full font-bold flex justify-end mt-4">-「 {hitokoto.value.from} 」</div>
      </Card>
    )
  }
})
