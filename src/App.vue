<template>
  <div id="app">
    <Header />
    <div class='container'>
      <div class='main-row'>
        <router-view name='main' id='router-main'/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: { Header, Footer }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-size: 12px;
  max-width: 100%;
  overflow-x: hidden;
}
html {
  height: 100%;
}
body {
  margin: 0;
  min-height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  flex: 1 0 100%;
  color: #484848;
  min-height: 100vh;
  background-color: #fff;
}
#app > .container {
  flex: 1 0 auto;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: calc(100% - 1.5rem * 2);
}
.main-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#router-main {
  overflow-y: scroll;
}
@media (min-width: 768px) {
  #app > .container {
    width: 750px;
  }
  .main-row {
    flex-direction: row;
  }
}
</style>
