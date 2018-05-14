import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import products from './productReducer'
import newstudent from './createStudent'

export default combineReducers({
  routing: routerReducer,
  counter,
  products,
  newstudent
})