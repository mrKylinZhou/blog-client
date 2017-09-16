<template>
    <div>
        <div class="main-inner">
            <content-warp></content-warp>
            <sidebar-toggle></sidebar-toggle>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
import contentWarp from './content-wrap';
import sidebarToggle from './sidebar-toggle';
import sidebar from './sidebar';
export default {
    name: 'main-content',
    components: {
        contentWarp,
        sidebarToggle,
        sidebar
    }
}
</script>


<style lang="less" scoped>
    .main-inner {
        margin: 0 auto;
        width: 700px;
    }
</style>
