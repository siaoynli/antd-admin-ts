/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-01 17:08:29
 * @Description:
 */
import React from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { decrement, increment, incrementAsync, decrementAsync } from './redux/actions'

import { Button } from 'antd'

import { reducerState } from '../common/rootReducer'

// 创建类型接口
interface IProps {
  value: number
  onIncrement: () => void
  onDecrement: () => void
  onIncrementAsync: () => void
  onDecrementAsync: () => void
}

// 使用接口代替 PropTypes 进行类型校验
class Counter extends React.Component<IProps> {
  componentWillMount(): void {
    // tslint:disable-next-line
    console.log(this.props)
    // 这里的prop是拿不到dispatch函数，因为组合高阶函数的时候做了处理，没有传入dispatch，只有{value: 0, onDecrement: ƒ, onIncrement: ƒ}
  }

  render(): JSX.Element {
    const { value, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync } = this.props
    return (
      <div>
        Clicked: {value} times
        <br />
        <br />
        <Button onClick={onIncrement} style={{ marginRight: 20 }}>
          +
        </Button>
        <Button onClick={onIncrementAsync} style={{ marginRight: 20 }}>
          异步+
        </Button>
        <Button onClick={onDecrementAsync} style={{ marginRight: 20 }}>
          异步-
        </Button>
        <Button onClick={onDecrement}> - </Button>
      </div>
    )
  }
}

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
const mapStateToProps = (state: reducerState): { value: number } => {
  return {
    value: state.homeReducer
  }
}

// 将 对应action 插入到组件的 props 中
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   onDecrement: () => dispatch(decrement()),
//   onIncrement: () => dispatch(increment())
// })

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onDecrement: decrement,
      onIncrement: increment,
      onIncrementAsync: incrementAsync,
      onDecrementAsync: decrementAsync
    },
    dispatch
  )

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
