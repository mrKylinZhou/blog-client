<template>
    <div class="sidebar-toggle">
        <div class="sidebar-toggle-line-wrap">
            <span class="sidebar-toggle-line"></span>
            <span class="sidebar-toggle-line"></span>
            <span class="sidebar-toggle-line"></span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .sidebar-toggle {
        position: fixed;
        right: 30px;
        bottom: 45px;
        width: 14px;
        height: 14px;
        padding: 5px;
        background: #222;
        line-height: 0;
        z-index: 1050;
        cursor: pointer;
        -webkit-transform: translateZ(0);
            .sidebar-toggle-line {
                position: relative;
                display: inline-block;
                vertical-align: top;
                height: 2px;
                width: 100%;
                background: #fff;
                margin-top: 3px;
            }
            .sidebar-toggle-line:first-child {
                margin-top: 0;
            }
    }
</style>
