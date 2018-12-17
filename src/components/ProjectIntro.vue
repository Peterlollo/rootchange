<template>
  <div id='project' class='project'>
    <div class='container'>
      <h1>{{getName}}</h1>
      <div class='image-container' :class='getName'>
        <img class='project-image' src='../assets/cosmos-map.png' />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProjectIntro',
  computed: {
    getName () {
      return this.name || this.getPath()
    },
    ...mapState({
      name: state => state.project.name,
      src: state => state.project.src
    })
  },
  methods: {
    getPath () {
      let path = window.location.pathname
      let i = path.split('').reverse().indexOf('/')
      return path.slice(-i)
    }
  }
};
</script>

<style lang="css" scoped>
#project, .project {
  background-color: #021D44;
  height: 100%;
  min-height: 100%;
}
.container {
  margin-left: 25px;
  margin-right: 25px;
}
h1 {
  color: #fff;
  font-weight: 900;
  font-size: 4rem;
}
.project-image {
  width: 100%;
  height: auto;
}
.project-image:hover {
  cursor: pointer;
}
/*.earthjustice {
  background-image: url('../assets/ej-watchlist.png');
}
.cosmos {
  background-image: url('../assets/cosmos-map.png');
}
.barbershop-books {
  background-image: url('../assets/bb-home.png');
}*/
</style>
