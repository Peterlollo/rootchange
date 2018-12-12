<template>
  <section class='projects'>
    <!-- <h1 class='title'>PROJECTS</h1> -->
    <div id='box'>
      <ul>
        <li v-for='(project, i) in projects' :key='i' class='project'>
            <a v-on:click='showProject(project)'>
            <div :class='project.name'>
              <div class='color'></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Projects',
  data () {
    return {
      scrolled: false,
      projects: [
      {
        name: 'cosmos',
        src: '../assets/cosmos-map'
      },
      {
        name: 'earthjustice',
        src: '../assets/ej-watchlist'
      },
      {
        name: 'barbershop-books',
        src: '../assets/bb-home'
      }]
    };
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0;
      if (window.innerWidth >= 767) {
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
    },
    ...mapActions(['showProject'])
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
.projects {
  /*background-color: #fff;*/
  background-color: #021D44;
}
.title {
  font-size: 3rem;
  font-weight: 900;
  color: #ff5851;
  padding-top: 40px;
  padding-left: 20px;
  text-align: left;
}
#box {
  /*opacity: .5;*/
  transform: none;
  transition: opacity 1s;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  padding-left: 0;
}
li, .color {
  width: 90%;
  height: 350px;
  transition: .5s ease;
}
li:hover {
  height: 360px;
  width: 95%;
  cursor: pointer; 
}
.project {
  width: 90%;
  padding: 20px 10px;
}
.project > * {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-position: center, top;
}
.earthjustice {
  background-image: url('../assets/ej-watchlist.png');
}
.cosmos {
  background-image: url('../assets/cosmos-map.png');
}
.barbershop-books {
  background-image: url('../assets/bb-home.png');
}
/*.color {
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color .25s;
}
.color:hover {
  background-color: rgba(0, 0, 0, 0);
}*/
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
