/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 10:56:58
 * @Description:
 */

import { combineReducers } from 'redux'

import homeReducer from '../home/redux/reducers'
import { userReducer, UserState } from '../user/redux/reducers'

//根据reducer state 类型， 根据reducer返回类型定义interface
export interface reducerState {
  homeReducer: number
  userReducer: UserState
}

export default combineReducers({
  homeReducer,
  userReducer
})
