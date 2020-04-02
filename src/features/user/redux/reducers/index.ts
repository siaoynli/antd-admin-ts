/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 12:41:47
 * @Description:
 */

import { USER_ACTION_STATE } from '../actions'

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS
} from '../constants'

import { IUser } from '../../models'

interface UserData {
  data: IUser[]
}

export interface UserState {
  isFetch: boolean
  status: boolean
  messages: string
  lists: UserData
}

let users: IUser[] = []

export const userReducer = (
  state = {
    isFetch: false,
    status: false,
    messages: '',
    lists: { data: users }
  },
  action: USER_ACTION_STATE
): UserState => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return (state = {
        isFetch: true,
        status: false,
        messages: '',
        lists: { data: users }
      })
    case FETCH_USER_SUCCESS:
      users = action.payload
      return (state = {
        isFetch: false,
        status: true,
        messages: '',
        lists: { data: users }
      })
    case FETCH_USER_FAIL:
      return (state = {
        isFetch: false,
        messages: action.errors,
        status: false,
        lists: { data: users }
      })
    case DELETE_USER_REQUEST:
      return (state = {
        isFetch: true,
        status: false,
        messages: '',
        lists: { data: users }
      })
    case DELETE_USER_SUCCESS:
      users = users.filter((user: IUser) => user.id !== action.id)
      return (state = {
        isFetch: false,
        status: true,
        messages: '删除成功',
        lists: { data: users }
      })
    default:
      return state
  }
}
