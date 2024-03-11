import { Card, Icon, NuxtImg } from "#components"

/*
 * @Author: dushuai
 * @Date: 2024-03-11 14:35:51
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-11 16:03:54
 * @description: 网站列表
 */
export default defineComponent({
  name: 'HomeWebsite',
  setup() {

    const { websites } = useData()

    return () => (
      <div class="flex justify-between flex-wrap mb-32 lg:mb-0">
        {
          websites.value.map(website => (
            <Card onClick={_ => window.open(website.href, "_blank")} class="mb-2 group">
              <div class="w-32 h-16 lg:w-36 lg:h-20 flex justify-center items-center text-xl flex-shrink-0">
                {
                  website.iconType != 'img' ?
                    <Icon name={website.icon} class="text-2xl group-hover:text-[#00c16a] transition-[color]" /> :
                    <NuxtImg src={website.icon} class="w-6 h-6 grayscale group-hover:grayscale-0 transition-[filter]" />
                }
                <div class="ml-1">{website.name}</div>
              </div>
            </Card>
          ))
        }
      </div>
    )
  }
})
