<template>
  <div class="home">
    <particles></particles>
  </div>
</template>

<script>
  import Particles from '../../components/Particles.vue'
  export default {
    components: {
      Particles
    }
  }
</script>

<style lang="less" scoped>
  .home {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
</style>
