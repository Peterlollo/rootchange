<template>
  <div>
    <Intro />
    <div>
      <h1>I'm a programmer</h1>
      <hr>
      <h1 class='subtitle'>For mission-driven organizations</h1>
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
h1 {
  font-weight: 900;
  color: #fff;
}
.subtitle {
  color: #ff5851;
}
</style>
