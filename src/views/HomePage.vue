<template>
    <div class="HomePage">
        <MyCounter/>
        <HelloWorld msg='Hello World'/>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import MyCounter from '@/components/MyCounter.vue'





export default{
    name: 'HomePage',
    components: {
        HelloWorld, MyCounter
    }
}
</script>