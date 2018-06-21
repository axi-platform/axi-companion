import {action, observable} from 'mobx'

class PrintStore {
  // The current position of the user
  @observable position = [13.74, 100.588]

  // The current print shop the user is at
  @observable store = {}

  // The current tab of the interface
  @observable tab = 'locator'

  @action
  setStore = store => {
    this.store = store
  }

  @action
  setTab = tab => {
    this.tab = tab
  }
}

const store = new PrintStore()

export default store
