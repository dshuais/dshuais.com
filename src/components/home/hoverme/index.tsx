/*
 * @Author: dushuai
 * @Date: 2024-04-15 11:52:36
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-15 12:16:11
 * @description: hover盒子
 */
export default defineComponent({
  name: 'HoverMe',

  props: {
    text: {
      type: String,
      default: 'hover me ✌'
    }
  },

  setup(props, { slots }) {

    return () => (
      <div class="relative group">
        <div class="absolute bg-[#dddddd40] px-3 py-1 rounded-lg right-[-80px] top-[-35px] opacity-100 group-hover:opacity-0 transition-opacity duration-500">
          <div class="w-0 h-0 border-[8px] absolute !border-t-[#dddddd40] border-transparent bottom-[-16px] left-2"></div>
          <div>{props.text}</div>
        </div>
        {slots.default?.()}
      </div>
    )
  }
})