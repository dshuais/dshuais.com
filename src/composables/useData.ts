/*
 * @Author: dushuai
 * @Date: 2024-03-11 14:40:06
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-11 16:04:34
 * @description: 一些配置数据
 */

type Website = {
  name: string,
  href: string,
  icon: string,
  iconType?: 'icon' | 'img'
}

export const useData = () => {
  /**
   * 网站列表
   */
  const websites = ref<Website[]>([
    { name: 'homepage', href: 'https://homepage.dshuais.com/', icon: 'mdi:web-check' },
    { name: '博客', href: 'https://blog.dshuais.com/', icon: 'fa6-solid:blog' },
    // { name: 'create-kd', href: 'https://create-keep-design.dshuais.com/', icon: 'k' },
    { name: 'keepdesign', href: 'https://keep-design.dshuais.com/', icon: 'https://files.dshuais.com/images/logo/k.png', iconType: 'img' },
    { name: 'danmaku', href: 'https://danmaku-vue.dshuais.com/', icon: 'https://files.dshuais.com/images/logo/dm.png', iconType: 'img' },
  ])

  return {
    websites
  }
}
