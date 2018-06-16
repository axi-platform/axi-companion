import {computed, action} from 'mobx'

import routing, {matchRoute} from '../common/routing'

class ProjectStore {
  @computed
  get tab() {
    return matchRoute(/\/project\/\d+\/(\w+)/)
  }

  @action
  setTab = tab => {
    const curr = this.tab
    const path = routing.location.pathname
    const next = path.replace(curr, tab)

    if (next !== path) {
      routing.history.push(next)
    }
  }
}

export const store = new ProjectStore()

export default store
