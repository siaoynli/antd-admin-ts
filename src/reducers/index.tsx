import { IINCREMENTAction, IDECREMENTAction } from '../store/actions'
import { DECREMENT, INCREMENT } from '../store/const'

// 处理并返回 state
export default (state = 0, action: IINCREMENTAction | IDECREMENTAction): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
