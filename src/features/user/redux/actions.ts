/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 12:42:09
 * @Description:
 */

import { IUser } from '../models'

import { FETCH_USER_REQUEST, DELETE_USER_REQUEST } from './constants'

//action  返回数据结构 数据结构
export interface USER_ACTION_STATE {
  type: string
  payload: { state: number; list: { data: IUser[] } }
  user: IUser
}

export interface FETCH_USER_ACTION {
  type: string
}

export const fetch_user = (): FETCH_USER_ACTION => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export interface DELETE_USER_ACTION {
  type: string
  user: IUser
}

export const delete_user = (user: IUser): DELETE_USER_ACTION => {
  return {
    type: DELETE_USER_REQUEST,
    user: user
  }
}
