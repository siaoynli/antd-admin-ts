/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 16:38:24
 * @Description:
 */

/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 14:04:08
 * @Description:
 */

import { call, takeEvery, put, delay } from 'redux-saga/effects'
import axios from '../../common/axios'

import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from '../redux/constants'

import { DELETE_USER_ACTION } from '../redux/actions'

function* delete_user(action: DELETE_USER_ACTION) {
  try {
    //模拟异步请求
    yield delay(1000)

    console.log('delete:', action.id)

    yield put({ type: DELETE_USER_SUCCESS, id: action.id })
  } catch (error) {
    yield put({ type: DELETE_USER_FAIL, errors: error })
  }
}

function* user() {
  yield takeEvery(DELETE_USER_REQUEST, delete_user)
}

const deleteUser = [user()]

export default deleteUser
