import Vue from 'vue'
import Vuex from 'vuex'

import project from './project'
import * as projectActions from './project/actions'
import * as projectGetters from './project/getters'

Vue.use(Vuex)

const modules = {project}
const actions = Object.assign(projectActions)
const getters = Object.assign(projectGetters)
const store = new Vuex.Store({
  actions,
  getters,
  modules
})

Vue.use(store)

export default store
