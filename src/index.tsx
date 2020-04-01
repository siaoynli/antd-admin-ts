import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createStore, applyMiddleware } from 'redux' // 中间件和 store
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
// import rootSaga from './sagas'

// 2：创建saga中间件
// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     // 3：把 sagaMiddleware 当做一个中间件，引用调试工具
//     applyMiddleware(sagaMiddleware)
//   )
// )
const store = createStore(rootReducer, composeWithDevTools())

// sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
