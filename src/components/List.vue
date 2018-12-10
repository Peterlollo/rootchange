<template>
  <section class='list'>
    <ul id='box'>
      <li>Element 1</li>
      <li>Element 2</li>
      <li>Element 3</li>
    </ul>
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
ul {
  position: fixed;
  top: 50%;
  height: 65vh;
  transform: translate(1000px, -50%);
  display: block;
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  background-color: lightblue;
  align-items: center;
}
li {
  width: 200px;
  height: 200px;
  background-color: blue;
}
</style>
