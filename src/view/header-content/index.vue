<template>
    <div class="header">
        <div class="header-inner">
            <site-brand></site-brand>
        </div>
    </div>
</template>

<script>
import siteBrand from './site-brand';
export default {
    name: 'header-content',
    components: {
        siteBrand
    }
}
</script>

<style lang="less" scoped>
    @import './index.less';
</style>
