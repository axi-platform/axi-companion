import {action, observable} from 'mobx'

class AppStore {
  @observable tab = ''

  @action
  setTab = tab => {
    this.tab = tab
  }
}

const store = new AppStore()

export default store
