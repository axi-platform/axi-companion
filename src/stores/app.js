import {action, observable} from 'mobx'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

class AppStore {
  @observable message = 'Welcome to Axi Platform!'

  @action
  fetchMessage = async () => {
    await delay(1500)

    this.message = 'Axi Platform is now Ready.'
  }
}

export default new AppStore()
