import {action, observable} from 'mobx'

import noti from '../utils/noti'

const tabs = ['locator', 'document', 'queue']

class PrintStore {
  // The current position of the user
  @observable position = [13.74, 100.588]

  // The current print shop the user is at
  @observable store = {}

  // The current tab of the interface
  @observable tab = 'locator'

  @action
  setStore = shop => {
    if (shop.presence === 'offline') {
      noti.warn(`${shop.displayName} is currently unavailable.`)
      return
    }

    this.store = shop

    if (shop.latitude && shop.longitude) {
      this.position = [shop.latitude, shop.longitude]
    }

    noti.info(`เลือก ${shop.displayName} เป็นร้านปรินท์ปลายทางแล้ว`)
  }

  @action
  setTab = tab => {
    this.tab = tab
  }

  @action
  proceed = () => {
    const currentTab = tabs.indexOf(this.tab)

    if (!this.store.name) {
      noti.warning(`Please select a store first.`)

      return
    }

    this.setTab(tabs[currentTab + 1])
  }
}

const store = new PrintStore()

export default store
