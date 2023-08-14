import { actionProps } from '@/types'

const initState = {
  remindDrug: {},
}

const appReducer = (state = initState, action:any) => {
  switch(action.type) {
    case 'REMIND_DRUG_CHANGE':
      return {
        ...state,
        remindDrug: action.payload
      }
    default:
      return state
  }
}

export default appReducer