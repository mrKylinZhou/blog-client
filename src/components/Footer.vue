<template>
  <div class="footer">
    <div class="copy-right">
      <span>©&nbsp;</span>
      <span>2018&nbsp;</span>
      <mu-icon
        value="person"
        :size="16">
      </mu-icon>
      <span>&nbsp;Kylin&nbsp;</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .footer {
    font-size: 14px;
    color: #999;
    text-align: center;
    .copy-right {
      display: inline-flex;
      align-items: center;
      height: 24px;
      line-height: 24px;
    }
  }
</style>
