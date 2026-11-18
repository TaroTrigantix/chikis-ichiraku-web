import {REDUCER_NAME} from './const'

export const selectOwnState = (state) => {
    return state[REDUCER_NAME]
}
