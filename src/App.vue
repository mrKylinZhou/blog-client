<template>
  <div>
    <head-band></head-band>
    <div class="main">
      <router-view></router-view>
    </div>
    <k-footer></k-footer>
  </div>
</template>

<script>
  import HeadBand from './components/HeadBand.vue'
  import KFooter from './components/Footer.vue'
  export default {
    components: {
      HeadBand,
      KFooter
    }
  }
</script>

<style scoped>
  .main {
    min-height: calc(100vh - 50px)
  }
</style>
