<template>
  <div id="app">
    <Header />
    <div class='container'>
      <div class='main-row'>
        <router-view name='sidebar' id='router-sidebar'/>
        <router-view name='main' id='router-main'/>
      </div>
    </div>
    </Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { changeRoute } from './utils'
export default {
  name: 'app',
  components: { Header, Footer }
}
</script>

<style>
body { margin: 0; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
/*#app > .container {
  flex: 1 0 auto;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: calc(100% - 1.5rem * 2);
}*/
.main-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}
</style>
