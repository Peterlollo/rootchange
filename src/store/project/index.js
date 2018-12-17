import {
  SHOW_PROJECT
} from './types'

const state = {
  current: '',
  projects: {
    'xinampa': {
      summary: 'Xinampa is building the first sustainable energy marketplace in Latin America. I built user and enterprise-facing React / Redux SPAs, integrated the frontend with a Python / Flask / Postgres backend, implemented a Stripe payment system, and updated roles and auth using Flask Security.',
      src: '../assets/xinampa'
    },
    'earthjustice': {
      summary: 'Earthjustice is a nonproject environmental law organization. I built them a custom application that allows intelligent interaction with their web analytics and traffic data. The app is served from a Node.js server, pulls data from the Google Analytics API, is connected to a Postgres db, uses a Vue.js frontend, and was deployed through Heroku.',
      src: '../assets/earthjustice'
    },
   'barbershop-books': {
      summary: '',
      src: '../assets/barbershop'
    }
  }
}

const mutations = {

  [SHOW_PROJECT] (state, project) {
    state.current = project
  }

}

export default { state, mutations }
