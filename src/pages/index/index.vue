<template>
  <view ref="testRef" class="w-screen h-screen">
    <view @click="testClick" class="w-10 h-10 bg-red-500">helloworld</view>
  </view>
</template>
<script setup>
const { proxy: instance } = getCurrentInstance()
</script>
<style lang="scss" scoped></style>
