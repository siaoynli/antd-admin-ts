import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { Button, Table, Popconfirm, message } from 'antd'

import { reducerState } from '../common/rootReducer'

import { UserState } from './redux/reducers'
import { fetch_user, delete_user } from './redux/actions'

import { IUser } from './models'

interface IProps {
  isFetch: boolean
  status: boolean
  messages: string
  users: IUser[]
  fetch_user: () => void
  delete_user: (user: IUser) => void
}

class User extends Component<IProps> {
  delete = (user: IUser) => {
    const { delete_user } = this.props
    delete_user(user)
  }

  componentDidMount() {
    const { fetch_user } = this.props
    fetch_user()
  }

  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <Button type="link">{text}</Button>
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username'
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email'
      },

      {
        title: '操作',
        key: 'action',
        render: (text: string, record: IUser) => (
          <span>
            <Button type="link" style={{ marginRight: 16 }} title={record.name}>
              编辑
            </Button>
            <Popconfirm
              title="确认要删除这条记录吗?"
              onConfirm={() => {
                this.delete(record)
              }}
              okText="是"
              cancelText="否"
            >
              <Button type="link">删除</Button>
            </Popconfirm>
            ,
          </span>
        )
      }
    ]

    const { isFetch, status, users, messages } = this.props
    return (
      <div>
        {!status ? message.error(messages) : ''}
        {messages ? message.success(messages) : ''}
        <Table
          columns={columns}
          dataSource={users}
          loading={isFetch}
          pagination={false}
          rowKey={record => record.id}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: reducerState): UserState => {
  return {
    isFetch: state.userReducer.isFetch,
    status: state.userReducer.status,
    messages: state.userReducer.messages,
    users: state.userReducer.lists.data
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetch_user, delete_user }, dispatch)

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(User)
