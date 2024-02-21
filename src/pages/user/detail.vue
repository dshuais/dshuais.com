<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-09 17:43:10
 * @description: 心平气和
-->
<script setup lang="ts">
import { useAppStore } from '~/store';

const env = useRuntimeConfig()
const route = useRoute()
const appStore = useAppStore()

const count = ref<App.Count>(0)

// console.log('router:>> ', route)

function handleLog() {
  console.log('env:>> ', import.meta.env)
  console.log('public:>> ', env.public)

  // appStore.token = '12346'
  appStore.SET_TOKEN('123456789')

  // ThisLog()

}
</script>

<template>
  <div>
    user {{ count }}
    <BaseButton />
    <button @click="handleLog">log</button>
    <button @click="appStore.REMOVE_TOKEN()">remove Token</button>
    <div class="mt20 w-1/5 h-1/5 bg-yellow-300">{{ appStore.token }}</div>

    <div @click="back">返回</div>
  </div>
</template>
<style scoped lang="scss"></style>