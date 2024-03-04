<template>  

    <div class="AboutPage">
        <h1>About</h1>
        <MyCounter/>
    </div>
</template>  

<script>
    import MyCounter from '@/components/MyCounter.vue'

    export default {
        name: 'AboutPage',
        components: {
            MyCounter
        }
    }
</script>

<style>
</style>