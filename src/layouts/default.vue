<!--
 * @Author: dushuai
 * @Date: 2024-02-21 10:58:28
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-24 22:01:33
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
  <div class="h-[100vh]">
    <Loading :has-loading="hasLoading" />

    <!-- <div>我是default layout</div> -->
    <slot />
  </div>
</template>
