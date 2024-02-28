<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-28 17:15:45
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

    <div class="h-[100vh] max-w-6xl m-auto flex flex-col items-center justify-center">
      <div class="flex flex-col justify-center items-center select-none" v-show="!hasLoading">
        <GlitchText class="block sm:hidden" text="Hi," type="auto"></GlitchText>
        <GlitchText class="block sm:hidden" text="dushuai!" type="auto"></GlitchText>
        <GlitchText class="hidden sm:block" text="Hi, dushuai!" type="auto"></GlitchText>
      </div>

      <section class="relative w-full mx-auto mt-12">
        <Card>
          test
        </Card>
      </section>
    </div>

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
