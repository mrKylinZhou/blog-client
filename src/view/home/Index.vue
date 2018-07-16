<template>
  <div>
    <head-band></head-band>
    <k-main></k-main>
    <k-footer></k-footer>
  </div>
</template>

<script>
  import HeadBand from '../../components/HeadBand.vue'
  import KMain from './main'
  import KFooter from '../../components/Footer.vue'
  export default {
    components: {
      HeadBand,
      KMain,
      KFooter
    }
  }
</script>
