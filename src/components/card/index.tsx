/*
 * @Author: dushuai
 * @Date: 2024-02-28 15:43:32
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-29 14:57:31
 * @description: 项目自用卡片样式
 */
type Poprs = {
  hover: boolean;
}

export default defineComponent({
  name: 'Card',
  props: {
    hover: {
      type: Boolean,
      default: true
    }
  },
  setup(props: Poprs, { slots }) {
    return () => (
      <div class={["rounded-md bg-[#dddddd40] backdrop-blur scale-100 transition-[backdrop-filter,transform,background] duration-300 cursor-pointer w-[fit-content] p-4", props.hover ? 'hover:bg-[#cccccc40] hover:scale-110' : '']}>
        {slots.default?.()}
      </div>
    )
  }
})
