<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-24 22:07:37
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
  <div class="w-full overflow-x-hidden h-full bg-[#333]">
    <GlitchText text="HI, DUSHUAI." class="text-center mt-20"></GlitchText>
  </div>
</template>
