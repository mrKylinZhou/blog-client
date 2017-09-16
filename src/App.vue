<template>
    <div>
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

<style>
    @import './common/reset.css';
</style>
