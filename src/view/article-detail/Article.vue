<template>
  <mu-paper
    class="article"
    :z-depth="2">
    <div v-html="formatArticle"></div>
  </mu-paper>
</template>

<script>
  import marked from 'marked'
  import { GetArticle } from '../../apis/index.js'
  export default {
    data() {
      return {
        article: ''
      }
    },
    computed: {
      formatArticle() {
        return marked(this.article)
      }
    },
    async created() {
      const name = this.$route.params.name
      this.article = await GetArticle(name)
        .catch(msg => msg)
    }
  }
</script>


<style lang="less" scoped>
  .article {
    width: 100%;
    padding: 40px;
  }
</style>
