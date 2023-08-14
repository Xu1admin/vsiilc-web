import { combineReducers } from 'redux'

// 手动引入每个页面module
import LoginReducer from './reducer/LoginReducer'
import AppReducer from './reducer/AppReducer'


// 合并module的reducer
const reducer = combineReducers({
  Login: LoginReducer,
  App: AppReducer
})


export default reducer