import React from 'react'
import CopyRightFooter from '../atoms/CopyRightFooter'
import SocialMedia from '../molecules/SocialMedia'

export default function CopyRightGroup() {
    return (
        <>
            <div className="copyright-group">
                <CopyRightFooter />
                <SocialMedia />
            </div>
        </>
    )
}