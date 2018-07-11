<template>
  <mu-paper
    class="menu"
    :z-depth="2">
    <div class="site-brand-wrapper">
      <mu-button
        flat
        large
        text-color="#fff">
        Kylin
      </mu-button>
    </div>
    <mu-list
      class="nav">
      <mu-list-item button>
        <mu-list-item-title
          class="nav-title">
          首页
        </mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title
          class="nav-title">
          文章
        </mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-paper>
</template>

<style lang="less" scoped>
  .menu {
    width: 100%;
    .site-brand-wrapper {
      width: 100%;
      text-align: center;
      padding: 20px 0px;
      background-color: #262a30;
    }
    .nav {
      .nav-title {
        font-size: 14px;
        color: #555;
      }
    }
  }
</style>
