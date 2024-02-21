<!--
 * @Author: dushuai
 * @Date: 2023-12-04 09:32:55
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-08 17:50:49
 * @description: menus layout
-->
<template>
  <div>
    <div>我是menus layout</div>
    <div class="layout">
      <div class="sidebar">我是menus layout sidebar</div>
      <div class="content">
        <slot />
      </div>
    </div>
    <div>我是menus layout footer</div>
  </div>
</template>

<style scoped>
.layout {
  position: relative;
  height: 200px;
}

.sidebar {
  width: 200px;
  height: 200px;
  background: red;
  position: absolute;
}

.content {
  width: calc(100% - 200px);
  height: 200px;
  position: absolute;
  left: 200px;
  background-color: sandybrown;
}
</style>