<!--
 * @Author: dushuai
 * @Date: 2024-02-21 10:58:28
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-27 18:18:33
 * @description: default layout
-->
<script setup lang="ts">
import { useAppStore } from '~/store';

const { hasLoading: loading } = storeToRefs(useAppStore())
const hasLoading = ref(true);

const { wallpaperUrl } = useWallpaper()

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
  else loading.value = false
})

</script>
<template>
  <div class="fixed top-0 left-0 w-[100vw] h-[100vh]">
    <Loading :has-loading="hasLoading" />

    <ClientOnly>
      <LoadingImg :has-loading="hasLoading" />
    </ClientOnly>

    <slot />
  </div>
</template>
