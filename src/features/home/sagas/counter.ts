/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 15:45:13
 * @Description:
 */
import { INCREMENT_ASYNC, INCREMENT, DECREMENT, DECREMENT_ASYNC } from '../redux/constants'
import { delay } from 'redux-saga/effects'
import { put, takeEvery } from 'redux-saga/effects'

function* increase() {
  console.log('模拟异步+')
  yield delay(1000) // 需要执行异步的时候，直接调用 delay
  yield put({ type: INCREMENT })
}

function* decrease() {
  console.log('模拟异步-')
  yield delay(1000) // 需要执行异步的时候，直接调用 delay
  yield put({ type: DECREMENT })
}

function* add() {
  yield takeEvery(INCREMENT_ASYNC, increase)
}

function* sub() {
  yield takeEvery(DECREMENT_ASYNC, decrease)
}

const rootCounter = [add(), sub()]

export default rootCounter
