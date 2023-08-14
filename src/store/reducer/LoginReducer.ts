import { actionProps } from '@/types'

// 全局sotre
const initState = {
  reducerNavigate: null,
  authorities: [],
  token: null,
  userInfo: {},
}

const rootReducer = (state = initState, action:any) => {
  switch(action.type) {
    case 'NAVIGATE_CHANGE':
      return {
        ...state,
        reducerNavigate: action.payload
      }

    case 'AUTH_CHANGE':
      return {
        ...state,
        authorities: action.payload
      }
    case 'TOKEN_CHANGE':
      return {
        ...state,
        token: action.payload
      }
    case 'USER_CHANGE':
      return {
        ...state,
        userInfo: action.payload
      }
    default:
      return state
  }
}

export default rootReducer