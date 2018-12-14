<template>
	<div id='project' class='project'>
		<div class='container'>
		  <h1>{{getName}}</h1>
		  <div class='image-container' :class='getName'></div>
      <p class='big-text'>Xinampa is building the first sustainable energy marketplace in Latin America. I built user and enterprise-facing React / Redux SPAs, integrated the frontend with a Python / Flask / Postgres backend, implemented a Stripe payment system, and updated roles and auth using Flask Security.</p>
      <h4 class='small-title'>Org</h4>
        <a class='big-text' href='http://xinampa.io/'>Xinampa</a>
      <h4 class='small-title'>Links</h4>
      <ul>
        <li><a class='big-text' href='://mikrocosmos-user.cosmos.io'>User-facing frontend</a></li>
        <li><a class='big-text' href='://mikrocosmos-provider.cosmos.io'>Enterprise-facing frontend</a></li>
        <li><a class='big-text' href='://xinampa.io/premium'>Premium Page and Payment</a></li>
      </ul>
      <div>More images here</div>
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
	min-height: 100%;
}
.container {
	margin-left: 25px;
	margin-right: 25px;
}
h1 {
	color: #fff;
	font-weight: 900;
}
ul {
  padding-left: 0;
}
li {
  list-style-type: none;
}
.image-container {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  background-position: center, top;
  min-height: 300px;
}
.image-container:hover {
  cursor: pointer;
}
.big-text {
  font-size: 1.7rem;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
.small-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0098FF;
  text-align: left;
  margin-bottom: .3rem;
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
