/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-03 10:39:10
 * @Description:
 */

import { IUser } from '../models'

const users: IUser[] = []

const initialState = {
  isFetch: false,
  lists: { data: users }
}

export default initialState
