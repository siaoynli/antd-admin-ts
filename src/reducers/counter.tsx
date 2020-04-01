import { INCREMENT } from '../constants'
import { INCREMENT_ACTION } from '../actions'

const counter = (state = 1, action: INCREMENT_ACTION) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

export default counter
