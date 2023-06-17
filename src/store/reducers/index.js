import { combineReducers } from 'redux'
import listReducer from './lists.js'
import productReducer from './product.js'

export default combineReducers({
    lists: listReducer,
    product: productReducer
})