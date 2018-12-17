import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProjectSummary from '@/components/ProjectSummary'
import ProjectIntro from '@/components/ProjectIntro'
import ProjectSidebar from '@/components/ProjectSidebar'
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
        intro: ProjectIntro,
        main: ProjectSummary,
        sidebar: ProjectSidebar
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
