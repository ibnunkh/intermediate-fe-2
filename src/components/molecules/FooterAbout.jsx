import React from 'react'
import Logo from '../../assets/images/Logo-videobelajar.svg'

export default function FooterAbout() {
    return (
        <>
            <div className="about">
                <div className="footer-logo">
                    <img src={Logo} />
                </div>
                <div className="footer-text">
                    <div className="text-head">
                        <p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                    </div>
                    <div className="text-address">
                        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    </div>
                    <div className="text-phone">
                        <p>+62-877-7123-1234</p>
                    </div>
                </div>
            </div>
        </>
    )
}