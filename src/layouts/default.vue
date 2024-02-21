<!--
 * @Author: dushuai
 * @Date: 2024-02-21 10:58:28
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-21 18:27:34
 * @description: default layout
-->
<script setup lang="ts">
const hasLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    hasLoading.value = false;
  }, 500);
})
</script>
<template>
  <div>
    <Loading :has-loading="hasLoading" />

    <div>我是default layout</div>
    <slot />
  </div>
</template>