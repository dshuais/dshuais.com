import styles from './index.module.scss';

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
      <div id={styles['loader-wrapper']} class={[props.hasLoading ? void 0 : styles.loaded, 'select-none']}>
        <div class={styles.loader}>
          <div class={styles['loader-circle']} />
          <div class={styles['loader-text']}>
            <span class={styles.name}>
              {env.public.VITE_SITE_NAME}
            </span>
            <span class={styles.tip}> 加载中 </span>
          </div>
        </div>
        <div class={[styles['loader-section'], styles['section-left']]} />
        <div class={[styles['loader-section'], styles['section-right']]} />
      </div>
    )
  }
})
