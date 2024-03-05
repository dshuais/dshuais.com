/*
 * @Author: dushuai
 * @Date: 2024-02-28 15:43:32
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-05 10:55:53
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
  emits: {
    'click': (e: Event) => true
  },
  setup(props: Poprs, { slots, emit }) {

    function handleClick(event: Event) {
      emit('click', event)
    }

    return () => (
      <div class={["rounded-md bg-[#dddddd40] backdrop-blur scale-100 transition-[backdrop-filter,transform,background] duration-300 cursor-pointer w-[fit-content] p-4", props.hover ? 'hover:bg-[#cccccc40] hover:scale-110' : '']}
        onClick={withModifiers(e => handleClick(e), ['stop'])}>
        {slots.default?.()}
      </div>
    )
  }
})
