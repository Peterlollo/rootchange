<template>
  <div id='project' class='project'>
    <div class='container'>
      <h1>{{curProjectName}}</h1>
      <div class='image-container'>
        <div class='project-image'></div>
        <img class='project-image' :src='getSrc' />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import xinampa from '../assets/xinampa.png'
import earthjustice from '../assets/earthjustice.png'
import barbershop from '../assets/barbershop.png'
export default {
  name: 'ProjectIntro',
  data: () => {
    return {
      images: {xinampa, earthjustice, barbershop}
    }
  },
  computed: {
    // getName () {
    //   return this.name || this.getPath()
    // },
    getSrc () {
      return this.images[this.curProjectName]
    },
    ...mapGetters(['curProject', 'curProjectName'])
  },
  methods: {
    // getPath () {
    //   let path = window.location.pathname
    //   let i = path.split('').reverse().indexOf('/')
    //   return path.slice(-i)
    // }
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
.earthjustice {
  background-image: url('../assets/earthjustice.png');
}
.xinampa {
  background-image: url('../assets/xinampa.png');
}
.barbershop-books {
  background-image: url('../assets/barbershop.png');
}
</style>
