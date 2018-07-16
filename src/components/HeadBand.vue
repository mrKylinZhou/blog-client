<template>
  <div class="head-band"></div>
</template>

<script>
  export default {
    mounted () {
      this.$progress.start()
      setTimeout(() => {
        this.$progress.done()
      }, 100)
    }
  }
</script>


<style lang="less" scoped>
  .head-band {
    height: 3px;
    background-color: #222;
  }
</style>
