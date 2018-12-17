<template>
	<div class='container'>
    <p class='big-text'>{{curProject.summary}}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProjectSummary',
  computed: {
    ...mapGetters(['curProject'])
  }
}
</script>

<style scoped>
.container {
  margin-left: 25px;
  margin-right: 25px;
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
</style>
