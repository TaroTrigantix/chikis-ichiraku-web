import {selectOwnState as selectParentState} from '../selector'
import {REDUCER_NAME} from './const'

export const selectOwnState = (state) => {
    return selectParentState(state)[REDUCER_NAME]
}

export const selectIsPrivacyNoticeVisible = (state) => {
    return selectOwnState(state).isVisible
}
