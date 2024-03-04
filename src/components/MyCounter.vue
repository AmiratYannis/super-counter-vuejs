<template>
    <div>
        <h2>My super counter</h2>
        <p @click="increment()">You're clicked {{ cpt }} times</p>
        <hr>
        <p> The general total is {{ totalGeneral }} </p>
        <p> The double total is {{ doubleTotal }}</p>
    </div>

</template>

<script>
export default{
    name: 'MyCounter',
    data(){
        return {
            cpt: 0
        }
    },
    computed: {
        totalGeneral(){
            return this.$store.state.totalStore;
        },
        doubleTotal(){
            return this.$store.getters.totalDouble;
        }
    },
    methods: {
        increment(){
            this.cpt+=1
            this.$store.commit('setTotal',this.totalGeneral+1)
        }
    }
}
</script>

<style scoped>

</style>