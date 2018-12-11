<template>
  <div id='Header'>
  	<div class='left'>
  	  <p v-on:click='route("/")'>Peter Lollo</p>
  	 </div>
  	<div class='right'>Nav Bar</div>
  </div>
</template>

<script>
import { changeRoute } from '../utils'
export default {
	name: 'Header',
	methods: {
		route (name) {
			changeRoute(name)
		}
	}
}
</script>

<style scoped>
#Header {
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 20px;
	padding-bottom: 20px;
	width: 100%;
	align-items: center;
}
.left {
	display: flex;
	color: #fff;
	font-size: 1.2rem;
	padding-left: 20px;
}
.left:hover {
	cursor: pointer;
}
.right {
	display: flex;
	color: red;
	padding-right: 20px;
}
</style>
