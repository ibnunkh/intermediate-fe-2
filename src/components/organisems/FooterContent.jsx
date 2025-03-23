import React from 'react'
import FooterAbout from '../molecules/FooterAbout'
import FooterAbout2 from './FooterAbout2'

export default function FooterContent() {
    return (
        <>
            <div className="footer-content">
                <FooterAbout />
                <FooterAbout2 />
            </div>
        </>
    )
}