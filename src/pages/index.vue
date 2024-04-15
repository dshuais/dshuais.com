<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-15 14:16:19
 * @description: index
-->

<script setup lang="ts">
import { useAppStore } from '~/store';

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
        <GlitchText class="block sm:hidden" text="Hi," type="hover"></GlitchText>
        <GlitchText class="block sm:hidden" text="dushuai!" type="hover"></GlitchText>
        <HomeHoverme text="Hover Me !✌" class="hidden sm:block">
          <GlitchText text="Hi, dushuai!" type="auto"></GlitchText>
        </HomeHoverme>
      </div>

      <section class="relative w-full mx-auto mt-12 flex flex-col lg:flex-row">
        <div class="relative flex-1">
          <ClientOnly>
            <HomeInfo />
          </ClientOnly>
        </div>
        <div class="relative flex-1 mt-4 lg:mt-0 ml-0 lg:ml-16">
          <div class="flex items-center justify-between flex-col lg:flex-row relative lg:h-40">
            <ClientOnly>
              <HomeHitokoto class="h-full" />
              <HomeTime class="mt-4 lg:mt-0 h-full" />
            </ClientOnly>
          </div>
          <div class="mt-6">
            <div class="flex items-center text-lg mb-4">
              <div class="w-5 h-5 mr-2">
                <svg data-v-8748c824="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512">
                  <path
                    d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                    fill="currentColor"></path>
                </svg>
              </div>
              网站列表
            </div>
            <HomeWebsite />
          </div>
        </div>

        <Footer class="block lg:hidden" />

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
