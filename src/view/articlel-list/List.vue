<template>
  <div>
    <timeline timeline-theme="lightblue">
      <timeline-title>2018</timeline-title>
      <timeline-item
        v-for="item in lists"
        :key="item"
        bg-color="#9dd8e0">
        <router-link
          :to="{
            name: 'Article',
            params: {
              name: item
            }
          }">
          {{ item }}
        </router-link>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
  import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
  import { GetArticles } from '../../apis/index.js'
  export default {
    data() {
      return {
        lists: []
      }
    },
    components: {
      Timeline,
      TimelineItem,
      TimelineTitle
    },
    async created() {
      this.lists = await GetArticles()
        .catch(() => [])
    }
  }
</script>
