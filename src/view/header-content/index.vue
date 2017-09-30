<template>
    <div class="header">
        <div class="header-inner">
            <site-brand></site-brand>
            <site-nav></site-nav>
        </div>
    </div>
</template>

<script>
import siteBrand from './site-brand';
import siteNav from './site-nav';
export default {
    name: 'header-content',
    components: {
        siteBrand,
        siteNav
    }
}
</script>

<style lang="less" scoped>
    @import './index.less';
</style>
