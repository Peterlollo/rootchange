<template>
  <div>
    <Intro />
    <div>
      <h1>I'm a programmer</h1>
      <h4>For mission-driven organizations</h4>
    </div>
    <Projects />
  </div>
</template>

<script>
import Projects from './Projects'
import Intro from './Intro'
export default {
  name: 'Home',
  components: {Projects, Intro}
}
</script>

<style scoped>
</style>
