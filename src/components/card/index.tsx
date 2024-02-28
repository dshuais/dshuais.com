/*
 * @Author: dushuai
 * @Date: 2024-02-28 15:43:32
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-28 16:10:01
 * @description: 项目自用卡片样式
 */
export default defineComponent({
  name: 'Card',
  setup(_, { slots }) {
    return () => (
      <div class="rounded-md bg-[#dddddd40] backdrop-blur scale-100 transition-[backdrop-filter,transform,background] duration-300 hover:scale-110 cursor-pointer w-[fit-content] p-4 hover:bg-[#cccccc40]">
        {slots.default?.()}
      </div>
    )
  }
})
