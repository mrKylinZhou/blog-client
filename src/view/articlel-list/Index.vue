<template>
  <mu-flex class="main-container">
    <div class="msg-wrap">
    </div>
    <mu-flex fill class="article-wrap">
      <list></list>
    </mu-flex>
  </mu-flex>
</template>

<script>
  import List from './List.vue'
  export default {
    components: {
      List
    }
  }
</script>

<style lang="less" scoped>
  .main-container {
    width: 75%;
    margin: 0 auto;
    .msg-wrap {
      width: 240px;
      margin-right: 15px;
    }
  }
</style>
