import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import reduces from '@/reducer'

const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['home'],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 抽离出一个需要持久化的公共 reduce
const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers(reduces)
)

// createStore(reduce, 中间件)
const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(thunk, promise))
)

export default store
