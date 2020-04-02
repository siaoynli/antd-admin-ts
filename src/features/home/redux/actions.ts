/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 10:55:38
 * @Description:
 */
import { DECREMENT, INCREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } from './constants'

export interface INCREMENT_ACTION {
  type: string
}

// 增加 state 次数的方法
export const increment = (): INCREMENT_ACTION => ({
  type: INCREMENT
})

export const incrementAsync = (): INCREMENT_ACTION => ({
  type: INCREMENT_ASYNC
})

// 减少 state 次数的方法
export const decrement = (): INCREMENT_ACTION => ({
  type: DECREMENT
})

export const decrementAsync = (): INCREMENT_ACTION => ({
  type: DECREMENT_ASYNC
})
