<template>
  <section class='home'>
    <div class='backgrounds'>
      <div id='left' class='left'></div>
      <div id='right' class='right'></div>
    </div>
    <div id='title-container' class='title-container'>
      <span class='title-line'><h1 class='title'>Hi</h1><div class='dot'></div></span>
    </div>
    <div class='scroll-container'>
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
      if(window.innerWidth <= 767) {
        this.scrolled = window.scrollY > 0
        var element = document.getElementById('right')
        var title = document.getElementById('title-container')
        var titlex = -50
        var x = 50
        if(window.scrollY > 0) {
          x = 50 - window.scrollY
          titlex = -50 + window.scrollY
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
.title-line h1 {
  font-size: 10rem;
}
.dot {
  height: 2.5rem;
  width: 2.5rem;
  background-color: #ff5851;
  border-radius: 50%;
  display: inline-block;
}
.left, .right {
  display: flex;
  background-color: #ff5851;
  height: 2000px;
}
.left {
  background-color: #ff5851;
  flex-grow: 1;
  flex-basis: 50%;
}
.right {
  background-color: #fff;
  width: 50%;
}
.scroll-container {
  position: fixed;
  top: 78%;
  left: 40%;
  display: none;
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
@media(min-width: 767px) {
  .scroll-container {
    display: flex;
  }
}
</style>
