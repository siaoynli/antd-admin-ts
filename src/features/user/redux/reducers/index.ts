/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 12:41:47
 * @Description:
 */

import { USER_ACTION_STATE } from '../actions'

import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from '../../../common/constants'

import { IUser } from '../../models'

export interface UserState {
  isFetch: boolean
  error: string
  users: IUser[]
}

const users: IUser[] = []

export const userReducer = (
  state = {
    isFetch: false,
    error: '',
    users: users
  },
  action: USER_ACTION_STATE
): UserState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return (state = {
        isFetch: true,
        error: '',
        users: []
      })
    case FETCH_SUCCESS:
      console.log(action.payload)
      return (state = {
        isFetch: false,
        error: '',
        users: action.payload
      })
    case FETCH_FAIL:
      return (state = {
        isFetch: false,
        error: action.errors,
        users: []
      })
    default:
      return state
  }
}
