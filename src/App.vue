<template>
    <div class="container">
        <top></top>
        <main-content></main-content>
    </div>
</template>

<script>
import top from './view/top';
import mainContent from './view/main-content/index';
export default {
    name: 'app',
    components: {
        top,
        mainContent
    }
}
</script>

<style lang="less" scoped>
    @import './common/reset.css';
    .container {
        position: relative;
        min-height: 100%;
    }
</style>
