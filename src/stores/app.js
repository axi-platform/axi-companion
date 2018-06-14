import {action, observable, computed} from 'mobx'

import routing from './routing'

class AppStore {
  @observable active = false

  @computed
  get tab() {
    const path = routing.location.pathname
    const match = path.match(/\/project\/\d+\/(\w+)/)

    if (!match) return null

    console.log('Current Tab is', match[1])

    return match[1]
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

const store = new AppStore()

export default store
