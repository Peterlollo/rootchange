<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Intro />
    <List />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Intro from './components/Intro.vue'
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Intro,
    List
  }
}
</script>

<style>
body { margin-top: 0; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
