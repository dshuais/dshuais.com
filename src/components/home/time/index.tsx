/*
 * @Author: dushuai
 * @Date: 2024-02-29 16:01:46
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-08 15:04:03
 * @description: HomeTime
 */
import Card from "~/components/card"
import { getOtherWeather } from '~/api'

type City = {
  Carrier: string,
  City: string,
  Country: string,
  Province: string,
  UserIp: string,
}

type Weather = {
  weather: string,
  temperature: string,
  winddirection: string,
  windpower: string,
}

export default defineComponent({
  name: 'HomeTime',
  setup() {

    const curDate = ref(getDateParams(new Date()))

    const timer = ref<NodeJS.Timeout>()

    const city = ref<City>()
    const condition = ref<Weather>()

    function getWeather() {
      getOtherWeather()
        .then(res => {
          const { day_weather, max_degree, day_wind_direction, day_wind_power } = res.result.condition
          city.value = res.result.city
          condition.value = {
            weather: day_weather,
            temperature: max_degree,
            winddirection: day_wind_direction,
            windpower: day_wind_power
          }
        })
        .catch(err => {
          console.log('err:>> ', err)
        })
    }

    getWeather()

    onMounted(() => {
      timer.value = setInterval(() => {
        curDate.value = getDateParams(new Date())
      }, 1000);
    })

    onBeforeUnmount(() => {
      clearInterval(timer.value)
    })

    return () => (
      <Card class="w-full h-full flex items-center justify-center flex-col">
        <div>
          <span>{curDate.value.y} 年 </span>
          <span>{curDate.value.m} 月 </span>
          <span>{curDate.value.d} 日 </span>
          <span>星期{curDate.value.w}</span>
        </div>

        <div class="mt-2">
          <span class="font-time text-5xl tracking-widest">{curDate.value.h}:{curDate.value.mm}:{curDate.value.ss}</span>
        </div>

        <div class="mt-2">
          <span>{city.value?.City}市&nbsp;
            {condition.value?.weather}&nbsp;
            {condition.value?.temperature}℃&nbsp;
            {condition.value?.winddirection.endsWith('风') ? condition.value?.winddirection : `${condition.value?.winddirection}风`}&nbsp;
            ≤{condition.value?.windpower}级
          </span>
        </div>
      </Card>
    )
  }
})
