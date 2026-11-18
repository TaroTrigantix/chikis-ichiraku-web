import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {reducer as routerReducer} from './router/state'
import {reducer as websiteReducer} from './website/state'

const appReducer = combineReducers({
    ...routerReducer,
    ...websiteReducer,
})

export const store = configureStore({
    reducer: appReducer,
    devTools: true,
})
