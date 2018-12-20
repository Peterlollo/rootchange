import {
  SHOW_PROJECT
} from './types'

const state = {
  current: '',
  projects: {
    'xinampa': {
      summary: 'Xinampa is building the first sustainable energy marketplace in Latin America. I built user and enterprise-facing React / Redux SPAs, integrated the frontend with a Python / Flask / Postgres backend, implemented a Stripe payment system, and updated roles and auth using Flask Security.',
      src: '../assets/xinampa',
      imageName: 'xinampa',
      orgName: 'Xinampa',
      orgLink: 'http://xinampa.io/',
      webLinks: [
        {text: 'User-facing frontend', val: 'http://mikrocosmos-user.threestone.io'},
        {text: 'Enterprise-facing frontend', val: 'http://mikrocosmos-provider.threestone.io'},
        {text: 'Premium Page and Payment', val: 'http://cosmosdev.xinampa.io/premium'}
      ]
    },
    'earthjustice': {
      summary: 'Earthjustice is a nonproject environmental law organization. I built them a custom application that allows intelligent interaction with their web analytics and traffic data. The app is served from a Node.js server, pulls data from the Google Analytics API, is connected to a Postgres db, uses a Vue.js frontend, and was deployed through Heroku.',
      src: '../assets/earthjustice',
      imageName: 'earthjustice',
      orgName: 'Earthjustice',
      orgLink: 'https://earthjustice.org/',
      webLinks: [
        {text: 'ISP Analytics Interface', val: 'https://earthjustice-analytics.herokuapp.com/providers'},
        {text: 'Sessions Analytics Interface', val: 'https://earthjustice-analytics.herokuapp.com/pages?path=earthjustice.org'}
      ]
    },
   'barbershop-books': {
      summary: 'Barbershop Books is a nonprofit focused on improving literacy rates for black boys in America. I was their lead tech person, and built d3 maps, managed the Wordpress platform with custom PHP and Javascript, and assisted with Salesforce management.',
      src: '../assets/barbershop',
      imageName: 'barbershop',
      orgName: 'Barbershop Books',
      orgLink: 'https://barbershopbooks.org/',
      webLinks: [
        {text: 'D3 Interactive Map', val: 'https://barbershopbooks.org/barbershops/'},
        {text: 'Custom Donation Page', val: 'https://barbershopbooks.org/donate/'}
      ]
    }
  }
}

const mutations = {

  [SHOW_PROJECT] (state, project) {
    state.current = project
  }

}

export default { state, mutations }
