import {action, observable} from 'mobx'

class PrintStore {
  @observable station = ''

  @action
  setStation = station => {
    this.station = station
  }
}

const store = new PrintStore()

export default store
