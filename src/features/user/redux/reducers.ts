/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 12:41:47
 * @Description:
 */

import { USER_ACTION_STATE } from './actions'

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from './constants'

import { IUser } from '../models'
import initialState from './initialState'

interface UsersData {
  data: IUser[]
}

export interface UserState {
  isFetch: boolean
  lists: UsersData
}

let users: IUser[] = []

export const userReducer = (state = initialState, action: USER_ACTION_STATE): UserState => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...initialState, isFetch: true }
    case FETCH_USER_SUCCESS:
      users = action.payload.list.data
      return { ...initialState, lists: { data: users } }
    case FETCH_USER_FAIL:
      return { ...initialState }
    case DELETE_USER_REQUEST:
      users = users.map(user => {
        if (user.id === action.user.id) {
          user.isDelete = true
        }
        return user
      })
      return { ...initialState, lists: { data: users } }
    case DELETE_USER_SUCCESS:
      users = users.filter((user: IUser) => user.id !== action.user.id)
      return { ...initialState, lists: { data: users } }
    case DELETE_USER_FAIL:
      return { ...initialState }
    default:
      return state
  }
}
