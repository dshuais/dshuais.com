<script setup lang="ts">
definePageMeta({
  layout: 'menus'
})

const count = ref<number>(0)
</script>

<template>
  userindex {{ count }}
  <NuxtPage />
</template>
<style scoped lang="scss"></style>