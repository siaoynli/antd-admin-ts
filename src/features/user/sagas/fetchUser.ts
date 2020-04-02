/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 14:04:08
 * @Description:
 */

import { call, takeEvery, put } from 'redux-saga/effects'
import axios from '../../common/axios'

import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../redux/constants'

function* fetch_user() {
  try {
    const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')

    yield put({ type: FETCH_USER_SUCCESS, payload: users.data })
  } catch (error) {
    yield put({ type: FETCH_USER_FAIL, errors: error })
  }
}

function* user() {
  yield takeEvery(FETCH_USER_REQUEST, fetch_user)
}

// 使用数组导出
const fetchUser = [user()]

export default fetchUser
