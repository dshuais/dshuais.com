
/*
* @Author: dushuai
* @Date: 2024-02-29 15:58:16
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-04 17:04:57
* @description: HomeInfo
*/

import { Card, Icon, NuxtImg, NuxtLink, UTooltip } from "#components"

type Social = {
  id: string,
  type?: string,
  path: string,
  icon: string,
  tip: string,
}

export default defineComponent({
  name: 'HomeInfo',
  setup() {

    const socialList = ref<Social[]>([
      { id: 'github', path: 'https://github.com/dushuai', icon: 'mdi:github', tip: '去GitHub看看~' },
      { id: 'qq', path: 'https://res.abeim.cn/api/qq/?qq=1137896420', icon: 'basil:qq-solid', tip: '一起玩局游戏吧' },
      { id: 'wechat', path: '', icon: 'ic:baseline-wechat', type: 'pop', tip: '有什么事吗' },
      { id: 'wechat-public', path: '', icon: 'mingcute:wechat-miniprogram-fill', type: 'pop', tip: '订阅走起~' },
      { id: 'email', path: 'mailto:dsshuais2020@163.com', icon: 'ic:round-email', tip: '来一封Email~' },
      { id: 'juejin', path: 'https://juejin.cn/user/3158230569584056/posts', icon: 'tabler:brand-juejin', tip: '前排围观~' },
    ])

    const tip = ref<string>('通过这里找到我！')

    return () => (
      <Card hover={false} class="w-full h-full py-10">
        <div class="text-xs w-4 h-4 mb-2">
          <svg data-v-03d4b6aa="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink={'http://www.w3.org/1999/xlink'}
            viewBox="0 0 512 512">
            <path
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              fill="currentColor"></path>
          </svg>
        </div>
        <div class="font-Pacifico pl-8">Hello World</div>
        <div class="text-5xl font-title ml-[-1rem] mt-4 pl-3">己所不欲勿施于人.</div>
        <div class="w-full flex justify-end">
          <div class="text-xs w-4 h-4 relative right-0 mt-2">
            <svg data-v-03d4b6aa="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink={'http://www.w3.org/1999/xlink'}
              viewBox="0 0 512 512">
              <path
                d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                fill="currentColor"></path>
            </svg>
          </div>
        </div>

        {/* 社交 */}
        <div class="group w-full h-12 mt-8 flex items-center justify-between px-3 rounded-md hover:bg-[#22222240] transition-[background] duration-300">

          <div>
            {
              socialList.value ? socialList.value.map((item, index) => (
                <div class="inline-block" onMouseenter={_ => tip.value = item.tip} onMouseleave={_ => tip.value = '通过这里找到我！'}>
                  {
                    item.type === 'pop' ?
                      <UTooltip popper={{ arrow: true, placement: 'top' }} ui={{ "base": 'p-1 h-full' }} v-slots={{
                        text: () => (
                          <div class="w-36 h-full">
                            <NuxtImg src="https://files.dshuais.com/images/wallpaper/0.png" />
                          </div>
                        )
                      }}>
                        <NuxtLink>
                          <Icon name={item.icon} class="text-3xl hover:scale-125 transition-[transform] duration-300 mr-4" />
                        </NuxtLink>
                      </UTooltip>
                      :
                      <NuxtLink to={item.path} target="_blank">
                        <Icon name={item.icon} class="text-3xl hover:scale-125 transition-[transform] duration-300 mr-4" />
                      </NuxtLink>
                  }
                </div>
              )) : ''
            }
          </div>

          <div class="hidden group-hover:block tracking-wider">{tip.value}</div>

        </div>

        <div>站点数据</div>

      </Card>
    )
  }
})
