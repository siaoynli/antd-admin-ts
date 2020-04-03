/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-01 17:05:47
 * @Description:
 */
import { INCREMENT_ACTION } from './actions'
import { DECREMENT, INCREMENT } from './constants'

// 处理并返回 state,number类型
export default (state = 1, action: INCREMENT_ACTION): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
