<template>
    <div>
        <div class="main-inner">
            <content-warp></content-warp>
            <sidebar-toggle @sidebarChange="sidebarChangeHandle"></sidebar-toggle>
            <sidebar :isOpen="isSidebarOpen"></sidebar>
        </div>
    </div>
</template>

<script>
import contentWarp from './content-wrap';
import sidebarToggle from './sidebar-toggle';
import sidebar from './sidebar';
export default {
    name: 'main-content',
    data: function () {
        return {
            isSidebarOpen: false
        };
    },
    methods: {
        sidebarChangeHandle: function() {
            console.log('我被触发了');
            this.isSidebarOpen = !this.isSidebarOpen;
        }
    },
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
