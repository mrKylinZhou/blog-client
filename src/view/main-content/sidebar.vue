<template>
    <div class="sidebar" :style="style">
        <div class="sidebar-inner">
            <div>
                我是sidebar内容
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            default: false,
            type: Boolean
        }
    },
    computed: {
        style: function() {
            return {
                width: `${ this.isOpen ? 320 : 0 }px`
            }
        }
    }
}
</script>

<style lang="less">
    @import './sidebar.less';
</style>
