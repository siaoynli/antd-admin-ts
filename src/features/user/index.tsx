import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { Button } from 'antd'

import { reducerState } from '../common/rootReducer'

import { UserState } from './redux/reducers'
import { fetch_user } from './redux/actions'

import { IUser } from './models'

interface IProps {
  isFetch: boolean
  error: string
  users: IUser[]
  fetch_user: () => void
}

class User extends Component<IProps> {
  render() {
    const { isFetch, error, users, fetch_user } = this.props
    return (
      <div>
        <Button onClick={() => fetch_user()}>异步新增</Button>
        <p>isFetch:{isFetch ? '是' : '否'}</p>
        {error ? `<p>${error}</p>` : ''}

        {users.map(user => (
          <div key={user.id}>
            {user.id}:{user.name},{user.email}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: reducerState): UserState => {
  return {
    isFetch: state.userReducer.isFetch,
    error: state.userReducer.error,
    users: state.userReducer.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetch_user: fetch_user }, dispatch)

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(User)
