import {useEffect} from 'react'
import {connect} from 'react-redux'
import {dismissPrivacyNotice, initializePrivacyNotice} from '../../state/privacy-notice/action'
import {selectIsPrivacyNoticeVisible} from '../../state/privacy-notice/selector'
import Order from './Order'

const OrderContainer = ({
    isPrivacyNoticeVisible,
    initializePrivacyNotice,
    dismissPrivacyNotice,
}) => {
    useEffect(() => {
        initializePrivacyNotice()
    }, [initializePrivacyNotice])

    return (
        <Order
            isPrivacyNoticeVisible={isPrivacyNoticeVisible}
            onDismissPrivacyNotice={dismissPrivacyNotice}
        />
    )
}

const mapStateToProps = (state) => ({
    isPrivacyNoticeVisible: selectIsPrivacyNoticeVisible(state),
})

const mapDispatchToProps = {
    initializePrivacyNotice,
    dismissPrivacyNotice,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)
