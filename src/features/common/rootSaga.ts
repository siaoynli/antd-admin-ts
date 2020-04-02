/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 14:02:58
 * @Description:
 */

import { all } from 'redux-saga/effects'
import rootUser from '../user/sagas/fetchUser'

export default function* rootSaga() {
  yield all([
    // 同时并发多个
    ...rootUser
  ])
}
