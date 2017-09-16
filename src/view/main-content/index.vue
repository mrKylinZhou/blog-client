<template>
    <div>
        <content-warp></content-warp>
        <sidebar-toggle></sidebar-toggle>
        <sidebar></sidebar>
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
