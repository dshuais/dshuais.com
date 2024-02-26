/*
 * @Author: dushuai
 * @Date: 2024-02-22 16:54:32
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-26 16:59:51
 * @description: 小故障效果文字
 */
import styles from './index.module.scss'

type Props = {
  text: string;
  type: string; // hover | auto
}

export default defineComponent({
  name: 'GlitchText',
  props: {
    text: {
      required: true,
      type: String
    },
    type: {
      type: String,
      default: 'hover'
    }
  },
  setup(props: Props) {
    return () => (
      <div class={props.type == 'hover' ? styles.glitch : styles.title} data-text={props.text}>{props.text}</div>
    )
  }
})

// function GlitchHover(props: Props) {
//   return (
//     <div class={styles.glitch} data-text={props.text}>{props.text}</div>
//   )
// }

// function GlitchText(props: Props) {
//   return (
//     <div class={styles.title} data-text={props.text}>{props.text}</div>
//   )
// }
