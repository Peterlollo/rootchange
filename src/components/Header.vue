<template>
  <div id='Header'>
		<a v-on:click='route("/")' class='left'>
			<p class='name'>Peter Lollo</p>
		</a>
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
	background-color: #021D44;
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
.name {
	text-transform: uppercase;
}
.right {
	display: flex;
	color: red;
	padding-right: 20px;
	position: fixed;
	right: 0;
}
</style>
