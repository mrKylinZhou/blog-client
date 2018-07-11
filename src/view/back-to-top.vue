<template>
  <div class="back-to-top">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>

<style lang="less" scoped>
  .back-to-top {
    box-sizing: border-box;
    position: fixed;
    bottom: -100px;
    right: 30px;
    z-index: 1050;
    padding: 6px;
    width: 24px;
    background: #222;
    font-size: 12px;
    opacity: 1;
    color: #fff;
    cursor: pointer;
    text-align: center;
    transition-property: bottom;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
</style>
