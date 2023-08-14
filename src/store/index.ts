import {persistStore, persistReducer} from 'redux-persist'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
// 引入机制二选一
import storage from 'redux-persist/lib/storage'; // localeStorage 机制
import reducer from './reducerCombine'

// 黑白名单二选一
// BLACKLIST: 黑名单
const persistConfig = {
  key: 'root', // key是storage的存储的key
  storage: storage, // localeStorage, // 
  blacklist: ['reducerNavigate'] // 只有 reducerNavigate 不会被存在缓存
};

// thunk中间件，实现异步ation
// const allStoreEnhancers = compose(
//   applyMiddleware(thunk)
// )


/**创建 reducer, 导出*/
const myPersistReducer = persistReducer(persistConfig, reducer);
const store = createStore(myPersistReducer,{},applyMiddleware(thunk));
export const persistor = persistStore(store);

export default store