/*
 * @Author: dushuai
 * @Date: 2024-02-22 16:54:32
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-22 17:10:56
 * @description: 小故障效果文字
 */
import styles from './index.module.scss'

type Props = {
  text: string;
}

export default defineComponent({
  name: 'GlitchText',
  props: {
    text: {
      required: true,
      type: String
    }
  },
  setup(props: Props) {
    return () => (
      <div class={styles.glitch} data-text={props.text}>{props.text}</div>
    )
  }
})
