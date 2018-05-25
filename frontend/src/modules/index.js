import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import students from './studentReducer'
import newstudent from './createStudent'
import status from './statusStudent'
import updateStudent from './updateStudent'

export default combineReducers({
  routing: routerReducer,
  counter,
  students,
  newstudent,
  status,
  updateStudent,
})