<template>
  <div class="content-warp">
    <div class="content">
      <div class="post">
        我是内容
      </div>
    </div>
  </div>
</template>

<script>
  import request from '../../service/request'
  export default {
    name: 'content-warp',
    created: async function() {
      const data = request.get()
    }
  }
</script>
