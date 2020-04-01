/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-01 17:05:14
 * @Description:
 */

import { DECREMENT, DECREMENT_TYPE, INCREMENT, INCREMENT_TYPE } from '../const'

export interface IINCREMENTAction {
  type: INCREMENT_TYPE
}

export interface IDECREMENTAction {
  type: DECREMENT_TYPE
}

// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
  type: INCREMENT
})

// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
})
