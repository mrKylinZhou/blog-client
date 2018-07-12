<template>
  <mu-paper
    class="article"
    :z-depth="2">
    <div v-html="resolvedArticle"></div>
  </mu-paper>
</template>

<script>
  import marked from 'marked'
  import article from '../../../articles/hello-world.md'
  export default {
    data() {
      return {
        resolvedArticle: marked(article)
      }
    }
  }
</script>


<style lang="less" scoped>
  .article {
    width: 100%;
    padding: 40px;
  }
</style>
