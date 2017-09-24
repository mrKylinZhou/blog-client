<template>
    <div class="footer">
        <div class="footer-inner">
            <copyright></copyright>
        </div>
    </div>
</template>

<script>
import copyright from './copyright';
export default {
    name: 'footer-content',
    components: {
        copyright
    }
}
</script>


<style lang="less" scoped>
    .footer-inner {
        text-align: center;
        box-sizing: border-box;
        margin: 20px auto;
        width: 700px;
    }
</style>
