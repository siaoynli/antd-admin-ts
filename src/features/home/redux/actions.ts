/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 10:55:38
 * @Description:
 */
import { DECREMENT, INCREMENT } from './constants'

export interface INCREMENT_ACTION {
  type: string
}

export interface DECREMENT_ACTION {
  type: string
}

// 增加 state 次数的方法
export const increment = (): INCREMENT_ACTION => ({
  type: INCREMENT
})

// 减少 state 次数的方法
export const decrement = (): DECREMENT_ACTION => ({
  type: DECREMENT
})
