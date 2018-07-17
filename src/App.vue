<template>
  <div>
    <head-band></head-band>
    <div>
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
