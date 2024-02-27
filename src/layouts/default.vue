<!--
 * @Author: dushuai
 * @Date: 2024-02-21 10:58:28
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-27 17:56:16
 * @description: default layout
-->
<script setup lang="ts">
import { useAppStore } from '~/store';

const { hasLoading: loading } = storeToRefs(useAppStore())
const hasLoading = ref(true);

onMounted(() => {
  if (process.client) {
    setTimeout(() => {
      hasLoading.value = false;
    }, 500);
  }
})

watchEffect(() => {
  if (hasLoading.value) loading.value = true
  else setTimeout(() => {
    loading.value = false
  }, 300);
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
