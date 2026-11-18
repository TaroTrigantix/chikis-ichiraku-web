import {handleActions} from 'redux-actions'
import * as type from './type'

export const initialState = {
    isVisible: true,
}

export default handleActions({
    [type.DISMISS_PRIVACY_NOTICE]: (state) => {
        return {
            ...state,
            isVisible: false,
        }
    },
}, initialState)
