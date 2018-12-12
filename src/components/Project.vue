<template>
	<div id='project' class='project'>
		<div class='container'>
		  <h1>{{getName}}</h1>
		  <div class='image-container' :class='getName'></div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Project',
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
}
</script>

<style scoped>
#project, .project {
	background-color: #021D44;
	height: 100%;
	min-height: 500px;
}
.container {
	margin-left: 10px;
	margin-right: 10px;
}
h1 {
	color: #fff;
	font-weight: 900;
}
.image-container {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  background-position: center, top;
  min-height: 300px;
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
</style>
