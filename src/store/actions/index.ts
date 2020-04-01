/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-01 17:05:14
 * @Description:
 */

import { DECREMENT, INCREMENT } from '../const'

export interface IINCREMENTAction {
  type: string
}

export interface IDECREMENTAction {
  type: string
}

// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
  type: INCREMENT
})

// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
})
