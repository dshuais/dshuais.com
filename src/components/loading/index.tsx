/*
 * @Author: dushuai
 * @Date: 2024-02-21 17:02:58
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-22 12:16:39
 * @description: Loading
 */
type Props = {
  hasLoading: boolean;
}

export default defineComponent({
  name: 'Loading',
  props: {
    hasLoading: {
      type: Boolean,
      default: true
    }
  },
  setup(props: Props) {
    const env = useRuntimeConfig()

    return () => (
      <div id='loader-wrapper' class={[props.hasLoading ? void 0 : 'loaded', 'select-none']}>
        <div class='loader'>
          <div class='loader-circle' />
          <div class='loader-text'>
            <span class='name'>
              {env.public.VITE_SITE_NAME}
            </span>
            <span class='tip'> 加载中 </span>
          </div>
        </div>
        <div class='loader-section section-left' />
        <div class='loader-section section-right' />
      </div>
    )
  }
})
