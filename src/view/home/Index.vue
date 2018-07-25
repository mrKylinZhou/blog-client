<template>
  <div class="home">
    <div class="person-wrap">
      <person></person>
    </div>
    <particles></particles>
  </div>
</template>

<script>
  import Particles from '../../components/Particles.vue'
  import Person from '../../components/Person.vue'
  export default {
    components: {
      Particles,
      Person
    }
  }
</script>

<style lang="less" scoped>
  .home {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    .person-wrap {
      z-index: 20;
      width: 240px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
