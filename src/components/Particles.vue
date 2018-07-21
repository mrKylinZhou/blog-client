<template>
  <vue-particles
    :style="{
      backgroundImage: backgroundImage
    }"
    class="particles">
  </vue-particles>
 </template>

<script>
  export default {
    data() {
      const key = Math.floor(Math.random() * 8 + 1)
      return {
        backgroundImage: 'url(' + require(`../assets/img/bgs/k-${key}.jpg`) + ')'
      }
    }
  }
</script>

<style lang="less" scoped>
  .particles {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    background-size: cover;
  }
</style>
