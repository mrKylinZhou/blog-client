<template>
  <mu-paper
    class="player"
    :z-depth="10">
    <aplayer
      mini
      :music="{
        title: '惊鸿一面',
        artist: '不如吃茶去',
        src: 'http://fs.w.kugou.com/201807201033/a70678dca0e1e0a9cde9774ee228b7be/G013/M06/18/1F/TQ0DAFULduKAeKo1AD6j6vdDSIk363.mp3',
        pic: 'http://p1.music.126.net/WoR2LbM1IFauFpvhBWOjqA==/6642149743396577.jpg?param=130y130'
      }"
    />
  </mu-paper>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  export default {
    components: {
      Aplayer
    }
  }
</script>

<style lang="less" scoped>
  .player {
    position: fixed;
    overflow: hidden;
    top: 30px;
    left: 30px;
  }
</style>

