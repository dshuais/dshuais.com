<!--
 * @Author: dushuai
 * @Date: 2024-02-21 10:58:28
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-11 16:29:35
 * @description: default layout
-->

<script setup lang="ts">
import { useAppStore } from '~/store';

const { hasLoading, zoom } = storeToRefs(useAppStore())
const loading = ref(true);

const { wallpaperUrl, wallpaper, wallpapers, setWallpaperUrl } = useWallpaper()

const { showMessage } = useNotification()

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

ThisLog()

initImg()

hasLoading.value = true;

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
  if (hasLoading.value) {
    loading.value = true
    zoom.value = false
  } else {
    loading.value = false

    setTimeout(() => {
      zoom.value = true
      setTimeout(() => {
        showMessage(` <b style="color:#fff;">${dateHourTip()}</b> 欢迎访问我的主页`)
      }, 1200);
    }, 300);
  }
})


function dateHourTip(): string {
  const hour = new Date().getHours()
  if (hour >= 6 && hour < 8) {
    return '早上好'
  } else if (hour >= 8 && hour < 11) {
    return '上午好'
  } else if (hour >= 11 && hour < 13) {
    return '中午好'
  } else if (hour >= 13 && hour < 18) {
    return '下午好'
  } else {
    return '晚上好'
  }
}

</script>

<template>
  <div class="fixed top-0 left-0 w-[100vw] h-[100vh] select-none text-gray-100 font-content">
    <Loading :has-loading="loading" />

    <ClientOnly>
      <LoadingImg :has-loading="loading" />
    </ClientOnly>

    <slot />

    <Footer class="hidden lg:flex" />

    <UNotifications>
      <template #title="{ title }">
        <span v-html="title" />
      </template>
    </UNotifications>

  </div>
</template>
