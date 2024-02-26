<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-26 16:59:59
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

const { hasLoading } = storeToRefs(useAppStore())

onMounted(() => {
})
</script>
<template>
  <div class="main scale-125 transition-[transform] delay-500 overflow-x-hidden" :class="{ 'zoom': !hasLoading }">

    <GlitchText text="Hi, dushuai!" type="auto" class="mt-20"></GlitchText>


  </div>
</template>

<style scoped>
.main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #333; */
}

.zoom {
  animation: zoom .65s cubic-bezier(.25, .46, .45, .94) forwards;
}
</style>
