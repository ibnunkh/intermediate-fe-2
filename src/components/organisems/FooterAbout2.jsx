import React from 'react'
import About2Category from '../molecules/About2Category'
import About2Company from '../molecules/About2Company'
import About2Community from '../molecules/About2Community'

export default function FooterAbout2() {
    return (
        <>
            <div className="about-2">
                <About2Category />
                <About2Company />
                <About2Community />
            </div>
        </>
    )
}