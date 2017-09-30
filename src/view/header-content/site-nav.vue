<template>
    <div class="site-nav-warpper">
        <ul class="menu">
            <li class="menu-item">
                <i class="fa fa-fw fa-home"></i>
                <router-link :to="'/'">首页</router-link>
            </li>
            <li class="menu-item">
                <i class="fa fa-fw fa-archive"></i>
                <router-link :to="'/archive'">归档</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
    @import './site-nav.less';
</style>
