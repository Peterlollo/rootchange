export const projects = state => state.project.projects
export const curProjectName = state => state.project.current
let defaultProject = {
  summary: '',
  src: ''
}
export const curProject = (state, get) => get.projects[state.project.current] || defaultProject
