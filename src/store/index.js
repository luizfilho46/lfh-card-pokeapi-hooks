import { createStore } from 'redux'
import reducer from '../reducers/api'

export const Store = createStore(reducer)