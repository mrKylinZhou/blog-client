<template>
  <div class="container">
    <top></top>
    <header-content></header-content>
    <main-content></main-content>
    <foot-content></foot-content>
    <back-to-top></back-to-top>
  </div>
</template>

<script>
  import top from './view/top'
  import headerContent from './view/header-content/index'
  import mainContent from './view/main-content/index'
  import footContent from './view/footer-content/index'
  import backToTop from './view/back-to-top'
  export default {
    name: 'app',
    components: {
      top,
      headerContent,
      mainContent,
      footContent,
      backToTop
    }
  }
</script>

<style lang="less" scoped>
  @import './common/reset.css';
  @import './assets/css/font-awesome.css';
  .container {
    position: relative;
    min-height: 100%;
  }
</style>
