<template>
    <div class="container">
            <Resume />
    </div>
</template>

<script setup lang="ts">
import Resume from './components/Resume.vue'
</script>

<style lang="less" scoped>
.container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}
</style>