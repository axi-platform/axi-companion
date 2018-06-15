import {action, observable} from 'mobx'

class PrintStore {
  @observable station = {}
  @observable tab = 'locator'

  @action
  setStation = station => {
    this.station = station
  }

  @action
  setTab = tab => {
    this.tab = tab
  }
}

const store = new PrintStore()

export default store
