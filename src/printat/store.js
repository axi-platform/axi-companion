import {action, observable} from 'mobx'

import noti from '../utils/noti'

const tabs = ['locator', 'document', 'queue']

class PrintStore {
  // The current position of the user
  @observable position = [13.74, 100.588]

  // The center of the map
  @observable center = [13.74, 100.588]

  // The current print shop the user is at
  @observable store = {}

  // The current tab of the interface
  @observable tab = 'locator'

  // The files to be printed
  @observable files = []

  // The selected file to be previewed
  @observable selectedFile = {}

  @action addFile = file => this.files.push(file)

  @action selectFile = file => (this.selectedFile = file)

  @action
  setPosition = position => {
    this.center = position

    // Also recenter the map when the position changes.
    this.position = position
  }

  @action
  setStore = shop => {
    // If the store if offline, notify the user.
    if (shop.presence === 'offline') {
      noti.warn(`ร้าน ${shop.displayName} ไม่เปิดให้บริการในขณะนี้`)
      return
    }

    // If the two stores are the same, don't do anything.
    if (this.store.id === shop.id) return

    // Set the store
    this.store = shop

    // Set the center of the map to the store's position
    if (shop.latitude && shop.longitude) {
      this.center = [shop.latitude, shop.longitude]
    }

    // Display the notification
    if (shop.displayName) {
      noti.info(
        `เลือก <b>${shop.displayName}</b> เป็นร้านปรินท์ปัจจุบันแล้ว`,
        1100,
        {queue: 'printShop', killer: true},
      )
    }
  }

  @action setTab = tab => (this.tab = tab)

  @action
  proceed = () => {
    const currentTab = tabs.indexOf(this.tab)

    if (!this.store.name) {
      noti.warning('กรุณาเลือกร้านปรินท์ก่อนดำเนินการต่อ')

      return
    }

    this.setTab(tabs[currentTab + 1])
  }
}

const store = new PrintStore()

export default store
