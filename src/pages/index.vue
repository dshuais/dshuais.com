<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-07 11:10:56
 * @description: index
-->

<script setup lang="ts">
import { useAppStore } from '~/store';
const { showMessage } = useNotification()

useHead({
  // title: '我的应用',
  // titleTemplate: '%s - dshuais',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - DUSHUAI!` : 'DUSHUAI!'
  },
  link: [{
    rel: 'stylesheet',
    href: 'https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css',
  }],
  // busuanzi通过head引入无效
  // script: [{
  //   async: true,
  //   src: 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
  // }]
})

const { zoom } = storeToRefs(useAppStore())

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
  <div class="main scale-125 transition-[transform] delay-500 overflow-x-hidden" :class="{ 'zoom': zoom }">

    <div class="h-[100vh] max-w-[76rem] m-auto flex flex-col items-center lg:justify-center px-4 lg:px-0 pt-32 lg:pt-0">
      <div class="flex flex-col justify-center items-center select-none" v-show="zoom">
        <GlitchText class="block sm:hidden" text="Hi," type="auto"></GlitchText>
        <GlitchText class="block sm:hidden" text="dushuai!" type="auto"></GlitchText>
        <GlitchText class="hidden sm:block" text="Hi, dushuai!" type="auto"></GlitchText>
      </div>

      <section class="relative w-full mx-auto mt-12 flex flex-col lg:flex-row">
        <div class="relative flex-1">
          <ClientOnly>
            <HomeInfo />
          </ClientOnly>
        </div>
        <div class="relative flex-1 mt-4 lg:mt-0 ml-0 lg:ml-16">
          <div class="flex items-center justify-between flex-col lg:flex-row">
            <ClientOnly>
              <HomeHitokoto />
              <HomeTime class="mt-4 lg:mt-0" />
            </ClientOnly>
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
