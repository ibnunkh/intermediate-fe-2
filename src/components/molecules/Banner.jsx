import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="banner">
                <div className="cta">
                    <div className="text">
                        <span>NEWSLETTER</span>
                        <h3>Mau Belajar Lebih Banyak?</h3>
                        <p className="desc">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
                    </div>
                    <div className="button-wrapper-cta">
                        <input id="email" type="email" placeholder="Masukkan Emailmu"/>
                        <button className="button-cta" href="#">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}