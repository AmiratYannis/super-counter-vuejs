import { createStore } from "vuex"

export default createStore({
    state: {
        totalStore: 10
    },
    getters: {
        totalDouble(state){
            return state.totalStore*2;
        }
    },
    mutations: {
        setTotal(state, value){
            state.totalStore=value;
        }
    },
    actions: {

    },
    modules: {

    }
})