<template>
  <div>
    <head-band></head-band>
    <player></player>
    <div class="main">
      <router-view></router-view>
    </div>
    <k-footer></k-footer>
  </div>
</template>

<script>
  import HeadBand from './components/HeadBand.vue'
  import KFooter from './components/Footer.vue'
  import Player from './components/Player.vue'
  export default {
    components: {
      HeadBand,
      KFooter,
      Player
    }
  }
</script>

<style scoped>
  .main {
    min-height: calc(100vh - 50px)
  }
</style>
