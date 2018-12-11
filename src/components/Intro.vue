<template>
  <section class='home'>
    <div id='left' class='left'></div>
    <div id='title-container' class='title-container'>
      <span class='title-line'><h1 class='title'>Hi</h1><div class='dot'></div></span>
    </div>
    <div class='scroll-container' :class="{hide: scrolled}">
      <p class='scroll'>Scroll</p>
      <div class='arrow'></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
      if(window.innerWidth <= 767) {
        var element = document.getElementById('left')
        var title = document.getElementById('title-container')
        var titlex = -100
        var x = 50
        if(window.scrollY > 0) {
          x = 50 + window.scrollY
          titlex = -100 + window.scrollY
        }
        element.style.width = `${x}%`
        title.style.transform = `translate(${titlex}%, -50%)`
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.home {
  height: 700px;
}
#left {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: -1;
  background-color: #021D44;
}
.title-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);
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
.title-line h1 {
  font-size: 10rem;
  color: #fff;
}
.dot {
  height: 2.5rem;
  width: 2.5rem;
  background-color: #ff5851;
  border-radius: 50%;
  display: inline-block;
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
.hide {
  display: none;
}
@media(min-width: 767px) {
}
</style>
