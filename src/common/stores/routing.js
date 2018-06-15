import {RouterStore, syncHistoryWithStore} from 'mobx-react-router'

import history from '../../utils/history'

const routing = new RouterStore()

syncHistoryWithStore(history, routing)

export default routing
