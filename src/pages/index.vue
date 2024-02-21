<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-10 21:02:45
 * @description: test
-->
<script setup lang="ts">
import { Pages } from '~/enums/app';
// import { to } from '~/utils/router'
import { setTheme } from '~/utils/theme'

// setTheme()
const count = ref<number>(0)

function handleJump() {
  // to(Pages.UserDetail,{a:1}, {open:{target: '_blank'}})
  navigateTo({ path: '/user/detail', query: { a: 1 } })
}

</script>

<template>
  <div class="">
    index {{ count }}
    <div class="bg-green-500 mt20">123</div>
    <div class="box mt20 lg:hidden">我是apply</div>
    <div>
      <span class="text-primary bg-[#165DFF]">主色</span>
      <span class="text-regular regular">常规色</span>
      <span class="text-secondary">次要色</span>
      <span class="text-disabled">禁用色</span>
    </div>

    <NuxtLink to="/user">去/user</NuxtLink>
    <NuxtLink to="/user/detail">去/user</NuxtLink>
    <div @click="jump(Pages.UserDetail, { open: { target: '_blank' } })">打开新标签 去/user/detail</div>
    <div @click="redirect(Pages.User, { a: 1234 })">关闭当前页面</div>

    <div class="bg-success-deep">测试自定义主题</div>

    <details>
      <summary>Huh?</summary>
      <hr />
      <p>Huh.</p>
    </details>
  </div>
</template>
<style scoped>
/* .box {
  @apply w-80 h-20 md:bg-emerald-400 bg-green-800 text-rose-400 md:text-black dark:text-white;
} */

/* .regular { */
/* background: theme('colors.pink'); */
/* } */
</style>