
/*
* @Author: dushuai
* @Date: 2024-02-29 15:58:16
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-29 17:54:46
* @description: HomeInfo
*/

import { Card, Icon, NuxtLink } from "#components"

export default defineComponent({
  name: 'HomeInfo',
  setup() {
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
        <div class="w-full h-12 mt-8 flex items-center px-3 rounded-md hover:bg-[#22222240] transition-[background] duration-300">
          <NuxtLink to={'https://github.com/dshuais'}>
            <Icon name="akar-icons:github-fill" class="text-2xl hover:scale-125 transition-[transform] duration-300" />
          </NuxtLink>
        </div>
      </Card>
    )
  }
})
