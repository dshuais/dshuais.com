<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-22 17:24:09
 * @description: index
-->
<script setup lang="ts">
import { useAppStore } from '~/store';

useHead({
  // title: '我的应用',
  // titleTemplate: '%s - dshuais',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - dshuais` : 'dshuais'
  }
})

onMounted(() => {
})
</script>
<template>
  <div class="container">
    <GlitchText text="Hi, dshuais."></GlitchText>
  </div>
</template>
<style scoped>
.container {
  background: #000;
}
</style>
