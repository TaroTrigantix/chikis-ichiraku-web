import {createAction} from 'redux-actions'
import {ACKNOWLEDGEMENT_KEY} from './const'
import * as type from './type'

const dismissPrivacyNoticeAction = createAction(type.DISMISS_PRIVACY_NOTICE)

const hasAcknowledgedPrivacyNotice = () => {
    try {
        return sessionStorage.getItem(ACKNOWLEDGEMENT_KEY) === 'true'
    } catch {
        return false
    }
}

const savePrivacyNoticeAcknowledgement = () => {
    try {
        sessionStorage.setItem(ACKNOWLEDGEMENT_KEY, 'true')
    } catch {
        // Dismissing remains available when browser storage is blocked.
    }
}

export const initializePrivacyNotice = () => (dispatch) => {
    if (hasAcknowledgedPrivacyNotice()) {
        dispatch(dismissPrivacyNoticeAction())
    }
}

export const dismissPrivacyNotice = () => (dispatch) => {
    savePrivacyNoticeAcknowledgement()
    dispatch(dismissPrivacyNoticeAction())
}
