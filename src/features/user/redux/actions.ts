/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 12:42:09
 * @Description:
 */

import { IUser } from '../models'

import { FETCH_REQUEST } from '../../common/constants'

//action  返回数据结构 数据结构
export interface USER_ACTION_STATE {
  type: string
  payload: IUser[]
  errors: string
}

export const fetch_user = (): { type: string } => {
  return {
    type: FETCH_REQUEST
  }
}
