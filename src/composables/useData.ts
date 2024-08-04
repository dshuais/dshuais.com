/*
 * @Author: dushuai
 * @Date: 2024-03-11 14:40:06
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-04 15:14:35
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
    { name: 'homepage', href: 'https://dshuais-homepage.netlify.app/', icon: 'mdi:web-check' },
    { name: '博客', href: 'https://dshuais-blog.netlify.app/', icon: 'fa6-solid:blog' },
    // { name: 'create-kd', href: 'https://create-keep-design.dshuais.com/', icon: 'k' },
    { name: 'keepdesign', href: 'https://keep-design.netlify.app/', icon: `https://files-ds.netlify.app/images/logo/k.png`, iconType: 'img' },
    { name: 'danmaku', href: 'https://dshuais-danmaku.netlify.app/', icon: `https://files-ds.netlify.app/images/logo/dm.png`, iconType: 'img' },
  ])

  return {
    websites
  }
}
