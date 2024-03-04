<template>
  <div id="nav">
    <router-link to="/"> Home </router-link> |
    <router-link to="/about"> About </router-link>
  </div>
  <router-view/>
</template>

<script>
import router from './router'

export default {
  name: 'App',
  router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

#nav a{
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50

}

#nav a:active {
  color: #34a22e
}
</style>
