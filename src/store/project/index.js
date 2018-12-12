import {
  SHOW_PROJECT
} from './types'

const state = {
  name: '',
  src: ''
}

const mutations = {

  [SHOW_PROJECT] (state, project) {
    state.name = project.name
    state.src = project.src
  }

}

export default { state, mutations }
