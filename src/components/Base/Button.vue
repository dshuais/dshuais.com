<script setup lang="ts">
const count = ref<number>(0)
</script>

<template>
  <div>
    button {{ count }}
    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <button @click="count = 0">reset</button>
  </div>
</template>
<style scoped lang="scss"></style>