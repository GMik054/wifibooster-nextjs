import {combineReducers, configureStore} from '@reduxjs/toolkit'
import summaryReducer from './summarySlice'
import reviewSlice from "./reviewSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}


const combineReducer = combineReducers({
    summary: summaryReducer,
    review: reviewSlice
})

const persistedReducer = persistReducer(persistConfig, combineReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

// export const wrapper = createWrapper(makeStore);
export let persistor = persistStore(store)


// import {combineReducers, configureStore} from '@reduxjs/toolkit'
// import {createWrapper} from 'next-redux-wrapper'
// import summaryReducer from './summarySlice'
// import reviewSlice from "./reviewSlice";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
//
//
// const combineReducer = combineReducers({
//     summary: summaryReducer,
//     review: reviewSlice
// })
//
// const persistConfig = {
//     key: "bonuses",
//     storage
// }
//
// const persistedReduces = persistReducer(persistConfig, combineReducer);
//
// export const makeStore = () => configureStore({
//     reducer: persistedReduces,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })
//
// export const persistor = persistStore(makeStore())
// export const wrapper = createWrapper(makeStore);