import {action, observable} from 'mobx'
import swal from 'sweetalert'

import noti from '../utils/noti'
import app from '../utils/feathers'

const tabs = ['locator', 'document', 'queue']

const queues = app.service('queues')

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

  // Current Queue ID
  @observable queueId = null

  @action addFile = file => this.files.push(file)

  @action selectFile = file => (this.selectedFile = file)

  @action
  removeFile = () => {
    const {name} = this.selectedFile

    store.files = store.files.filter(file => file.name !== name)

    this.selectedFile = {}
  }

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
  proceed = async () => {
    const currentTab = tabs.indexOf(this.tab)

    if (!this.store.name) {
      noti.warning('กรุณาเลือกร้านปรินท์ก่อนดำเนินการต่อ')

      return
    }

    this.setTab(tabs[currentTab + 1])
  }

  @action setQueue = id => (store.queueId = id)

  @action
  createQueue = async () => {
    const deviceId = this.store.id
    const files = this.files.map(file => file.id)

    try {
      const {id} = await queues.create({deviceId, data: {files}})
      store.setQueue(id)

      // prettier-ignore
      noti.success(`สร้างคิวเรียบร้อยแล้ว เอกสารของคุณอยู่คิวที่ ${id} กรุณารอสักครู่~ 😎`)
    } catch (err) {
      console.error(err)
    }
  }

  @action
  startOver = () => {
    this.tab = 'locator'
    this.store = {}
    this.files = []
    this.selectedFile = {}
    this.queueId = null
  }

  @action
  cancel = async () => {
    const id = this.queueId

    const confirm = await swal({
      title: 'ต้องการยกเลิกคิวนี้จริงๆ ใช่มั้ย? 😱',
      text: 'คุณจะยกเลิกคิวนี้แน่แล้วใช่มั้ย ถ้ายกเลิกแล้วก็ยกเลิกเลยนะ!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })

    if (confirm) {
      const queue = await queues.patch(id, {status: 'canceled'})
      console.info('Canceled Queue:', queue)
    }
  }
}

const store = new PrintStore()

export default store
