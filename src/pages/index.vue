<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-05 11:20:56
 * @description: index
-->

<script setup lang="ts">
import { useAppStore } from '~/store';
const { showMessage } = useNotification()

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


function handleClick() {
  showMessage('hello world!')
}

if (process.client) {
  // busuanzi
  const countScript = document.createElement('script')
  countScript.async = true
  countScript.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  document.body.append(countScript)
}

</script>

<template>
  <div class="main scale-125 transition-[transform] delay-500 overflow-x-hidden" :class="{ 'zoom': !hasLoading }">

    <div class="h-[100vh] max-w-6xl m-auto flex flex-col items-center justify-center">
      <div class="flex flex-col justify-center items-center select-none" v-show="!hasLoading">
        <GlitchText class="block sm:hidden" text="Hi," type="auto"></GlitchText>
        <GlitchText class="block sm:hidden" text="dushuai!" type="auto"></GlitchText>
        <GlitchText class="hidden sm:block" text="Hi, dushuai!" type="auto"></GlitchText>
      </div>

      <section class="relative w-full mx-auto mt-12 flex">
        <div class="relative flex-1 h-96 mr-24">
          <ClientOnly>
            <HomeInfo />
          </ClientOnly>
        </div>
        <div class="relative flex-1">
          <div class="flex items-center justify-between">
            <HomeHitokoto />
            <HomeTime />
          </div>
          <div class="mt-8 mb-4">
            网站列表
            <UButton label="Show toast" @click="handleClick" />
          </div>
        </div>
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
