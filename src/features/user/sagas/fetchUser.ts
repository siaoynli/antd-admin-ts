/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 14:04:08
 * @Description:
 */

import { call, takeEvery, put } from 'redux-saga/effects'
import axios from '../../common/axios'

import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from '../../common/constants'

function* fetch_user() {
  try {
    const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')

    yield put({ type: FETCH_SUCCESS, payload: users.data })
  } catch (e) {
    yield put({ type: FETCH_FAIL, errors: e })
  }
}

function* fetch_todo() {
  const todos = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos')

  console.log(todos)
}

function* user() {
  yield takeEvery(FETCH_REQUEST, fetch_user)
}

function* todo() {
  yield takeEvery('FETCH_TODO', fetch_todo)
}

// 使用数组导出
const rootUser = [user(), todo()]

export default rootUser
