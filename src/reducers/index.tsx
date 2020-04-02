/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-01 17:05:47
 * @Description:
 */
import { INCREMENT_ACTION, DECREMENT_ACTION } from '../store/actions'
import { DECREMENT, INCREMENT } from '../store/const'

// 处理并返回 state
export default (state = 0, action: INCREMENT_ACTION | DECREMENT_ACTION): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
