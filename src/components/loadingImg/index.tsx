/*
 * @Author: dushuai
 * @Date: 2024-02-26 12:19:08
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-27 17:27:39
 * @description: 开屏图片加载
 */
import styles from './index.module.scss'


type Props = {
  hasLoading: boolean;
}

export default defineComponent({
  name: 'LoadingImg',
  props: {
    hasLoading: {
      type: Boolean,
      default: true
    }
  },
  setup(props: Props) {
    const bg = ref<HTMLElement>() // 图片节点
    const row = ref<number>(0) // 行数
    const col = ref<number>(0) // 列数
    const len = ref<number>(0) // 每个网格的大小
    const url = ref<string>() // 当前加载的图片索引

    /**
     * 初始化图片和网格大小
     */
    function initImg() {
      const imgW = window.innerWidth
      const imgH = window.innerHeight
      // len 取宽高中较小的值 保证铺满
      const maxGridCount = imgW > 1920 ? 1000 : imgW > 1000 ? 800 : imgW > 768 ? 600 : 400

      len.value = Math.min(imgW, imgH) / Math.sqrt(maxGridCount)
      row.value = Math.floor(imgH / len.value)
      col.value = Math.floor(imgW / len.value)

      const index = Math.floor(Math.random() * 46)
      url.value = getImageUrl(`home/${index}.png`)
    }

    function getCellStyle(rowIndex: number, colIndex: number) {
      return {
        width: `${len.value}px`,
        transition: `opacity ${100 + Math.random() * 500}ms ${((rowIndex + colIndex / 2) / 20) * Math.random() * 500}ms`
      }
    }

    initImg()

    onMounted(() => {
      bg.value?.style.setProperty('--img', `url('${url.value}')`)
      if (props.hasLoading) {
        setTimeout(() => {
          bg.value?.style.setProperty('--o', '0')
          setTimeout(() => {
            len.value = 0
          }, 2000);
        }, 700);
      }
    })

    return () => (
      <div class={[styles.bg, 'relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center']} ref={bg}>
        {
          len.value ?
            <div class="absolute inset-0">
              <div class="grid" style={{ gridTemplateColumns: `repeat(${col.value}, 1fr)` }}>
                {
                  new Array(row.value * col.value).fill(0).map((_, index) => (
                    <div class="bg-white dark:bg-gray-900 opacity-[var(--o)] aspect-1"
                      style={getCellStyle(Math.floor((index - 1) / col.value) + 1, ((index - 1) % col.value) + 1)}>
                    </div>
                  ))
                }
              </div>
            </div> : ''
        }
        <div class={styles.gray}></div>
      </div>
    )
  }
})
