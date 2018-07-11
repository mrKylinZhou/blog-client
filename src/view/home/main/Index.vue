<template>
  <div class="main-container">
    <k-menu></k-menu>
  </div>
</template>

<script>
  import KMenu from './Menu.vue'
  export default {
    components: {
      KMenu
    }
  }
</script>


<style lang="less" scoped>
  .main-container {
    width: 75%;
    margin: 0 auto;
  }
</style>
