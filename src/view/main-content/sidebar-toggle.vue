<template>
    <div class="sidebar-toggle">
        <div class="sidebar-toggle-line-wrap" @click="toggleClickHandle">
            <span class="sidebar-toggle-line"></span>
            <span class="sidebar-toggle-line"></span>
            <span class="sidebar-toggle-line"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar-toggle',
    methods: {
        toggleClickHandle: function () {
            this.$emit('sidebarChange');
        }
    }
}
</script>

<style lang="less" scoped>
    @import './sidebar-toggle.less';
</style>
