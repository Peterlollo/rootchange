import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Project'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        main: Home
      }
    },
    {
      path: '/project/*',
      name: 'project',
      components: {
        main: Project
      }
    },
    {
      path: '*',
      name: 'notFound',
      components: {
        main: NotFoundComponent
      }
    }
  ]
})
