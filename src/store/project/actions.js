import {
  SHOW_PROJECT
} from './types'

import { changeRoute } from '../../utils'

export const showProject = ({commit}, project) => {
  commit(SHOW_PROJECT, project)
  changeRoute(`project/${project.name}`)
}
