<template>
  <section class='list'>
    <div id='box'>
      <h1 class='subtitle'>I'm a programmer for mission-driven organizations</h1>
      <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0;
      var element = document.getElementById("box");
      var x = 1000
        if(window.scrollY > 0) {
          x = 732 - (5*window.scrollY)
        }
        element.style.transform = `translate3d(${x}px, -50%, 0)`;
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
#box {
  position: fixed;
  top: 50%;
  height: 65vh;
  transform: translate(1000px, -50%);
  display: block;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightblue;
}
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  justify-content: space-around;
}
li {
  width: 200px;
  height: 200px;
  background-color: blue;
}
</style>
