<!--
 * @Author: dushuai
 * @Date: 2024-02-21 10:58:28
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-28 18:31:18
 * @description: default layout
-->
<script setup lang="ts">
import { useAppStore } from '~/store';

const { hasLoading: loading } = storeToRefs(useAppStore())
const hasLoading = ref(true);

const { wallpaperUrl, wallpaper, wallpapers, setWallpaperUrl } = useWallpaper()

/**
 * 优先初始化图片 防止new Image加载之前的缓存图片
 */
function initImg() {
  if (wallpaper.value === 'auto') {
    const index = Math.floor(Math.random() * wallpapers.value)
    const url = `https://files.dshuais.com/images/wallpaper/${index}.png` // getImageUrl(`home/${index}.png`)
    setWallpaperUrl(url)
  }
}

initImg()

onMounted(() => {
  if (process.client) {
    const image = new Image();
    image.src = wallpaperUrl.value;
    image.onload = () => {
      hasLoading.value = false;
    }
  }
})

/**
 * 监听只是为了更新 存在storage内的状态 以供之后使用 暂无作用
 */
watchEffect(() => {
  if (hasLoading.value) loading.value = true
  else setTimeout(() => {
    loading.value = false
  }, 200);
})

</script>
<template>
  <div class="fixed top-0 left-0 w-[100vw] h-[100vh] select-none">
    <Loading :has-loading="hasLoading" />

    <ClientOnly>
      <LoadingImg :has-loading="hasLoading" />
    </ClientOnly>

    <slot />
  </div>
</template>
