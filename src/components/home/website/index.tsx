import { Card, Icon } from "#components"

/*
 * @Author: dushuai
 * @Date: 2024-03-11 14:35:51
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-11 14:58:41
 * @description: 网站列表
 */
export default defineComponent({
  name: 'HomeWebsite',
  setup() {

    const { websites } = useData()

    return () => (
      <div class="flex justify-between flex-wrap">
        {
          websites.value.map(website => (
            <Card onClick={_ => window.open(website.href, "_blank")} class="mb-2">
              <div class="w-36 h-20 flex justify-center items-center text-xl flex-shrink-0">
                <Icon name={website.icon} class="text-2xl mr-1" />
                <div>{website.name}</div>
              </div>
            </Card>
          ))
        }
      </div>
    )
  }
})
