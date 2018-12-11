<template>
  <div>
    <section class='home'>
      <div class='backgrounds'>
        <div class='left'></div>
        <div class='right'></div>
      </div>
      <div class='title-container'>
        <span class='title-line'><h1 class='title'>Hi</h1><div class='dot'></div></span>
      </div>
      <div class='scroll-container'>
        <p class='scroll'>Scroll</p>
        <div class='arrow'></div>
      </div>
    </section>
    <Projects />
  </div>
</template>

<script>
import Projects from './Projects'
export default {
  name: 'Home',
  components: {Projects},
  data: () => {
    return {
      secPassed: false,
      element: ''
    }
  },
  created () {
    setTimeout(() => {this.secPassed = true}, 2000)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backgrounds {
  display: flex;
  flex-direction: row;
}
.title-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title-container > * {
  font-size: 10rem;
  font-weight: 900;
  margin: 0;
  padding: 0;
}
.title-line {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.dot {
  height: 38px;
  width: 38px;
  background-color: #ff5851;
  border-radius: 50%;
  display: inline-block;
}
.left, .right {
  display: flex;
  background-color: #ff5851;
  flex-basis: 50%;
  height: 2000px;
}
.left {
  background-color: #ff5851;
}
.right {
  background-color: #fff;
}
.scroll-container {
  position: fixed;
  top: 78%;
  left: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scroll, .arrow {
  color: #fff;
}
.scroll {
  transform: rotate(-90deg);
  font-size: 26px;
}
.arrow {
  background-image: url('../assets/down-arrow-50-white.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0% {margin-top: 0;}
  50% {margin-top: 20px;}
  100% {margin-top: 0;}
}
</style>
