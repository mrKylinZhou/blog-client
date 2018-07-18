<template>
  <mu-flex class="main-container">
    <div class="msg-wrap">
      <k-menu></k-menu>
      <person
        class="person">
      </person>
    </div>
    <mu-flex fill class="article-wrap">
      <k-article></k-article>
    </mu-flex>
  </mu-flex>
</template>

<script>
  import KMenu from './Menu.vue'
  import Person from '../../components/Person.vue'
  import KArticle from './Article.vue'
  export default {
    components: {
      KMenu,
      Person,
      KArticle
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
      /deep/ .person {
        margin-top: 15px;
      }
    }
  }
</style>
