import {combineReducers} from 'redux'
import {REDUCER_NAME} from './const'
import {reducer as privacyNoticeReducer} from './privacy-notice'

const r = combineReducers({
    ...privacyNoticeReducer,
})

export const reducer = {
    [REDUCER_NAME]: r,
}
