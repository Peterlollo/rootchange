<template>
  <section class='projects'>
    <div id='box'>
      <ul>
        <li v-for='project, i in projects' class='project'>
            <a v-on:click='route(project.name)'>
            <div :class='project.className'>
              <div class='color'></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { changeRoute } from '../utils'
export default {
  name: 'Projects',
  data () {
    return {
      scrolled: false,
      projects: [
      {
        name: 'cosmos',
        className: 'image-first',
        src: '../assets/cosmos-map'
      },
      {
        name: 'earthjustice',
        className: 'image-second',
        src: '../assets/ej-watchlist'
      },
      {
        name: 'barbershop-books',
        className: 'image-third',
        src: '../assets/bb-home'
      }]
    };
  },
  methods: {
    route (name) { changeRoute(`project/${name}`) },
    handleScroll () {
      if(window.innerWidth >= 767) {
        this.scrolled = window.scrollY > 0;
        var element = document.getElementById("box");
        var x = 1000
        if(window.scrollY > 0) {
          x = 732 - (3*window.scrollY)
          element.style.opacity = 1
        }
        else {
          element.style.opacity = .5
        }
        element.style.transform = `translate3d(${x}px, -50%, 0)`;
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
#box {
  opacity: .5;
  transition: opacity 1s;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  justify-content: space-around;
}
li, .color {
  width: 354px;
  height: 228px;
  transition: width .5s;
  transition: height .5s;
}
li:hover {
  width: 374px;
  height: 248px;
  cursor: pointer; 
}
.project {
}
.project > * {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: center, top;
}
.image-first {
  background-image: url('../assets/ej-watchlist.png');
}
.image-second {
  background-image: url('../assets/cosmos-map.png');
}
.image-third {
  background-image: url('../assets/bb-home.png');
}
.color {
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color .25s;
}
.color:hover {
  background-color: rgba(0, 0, 0, 0);
}
@media(min-width: 767px) {
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
  }
  ul {
    flex-direction: row;
  }
}
</style>
