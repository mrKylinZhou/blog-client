<template>
  <div class="main-container">
    <k-menu></k-menu>
    <person></person>
  </div>
</template>

<script>
  import KMenu from './Menu.vue'
  import Person from './Person.vue'
  export default {
    components: {
      KMenu,
      Person
    }
  }
</script>


<style lang="less" scoped>
  .main-container {
    width: 75%;
    margin: 0 auto;
  }
</style>
