<!--
 * @Author: dushuai
 * @Date: 2024-02-21 10:58:28
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-26 11:44:22
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

    <!-- <div>我是default layout</div> -->
    <slot :has-loading="hasLoading" />
  </div>
</template>
