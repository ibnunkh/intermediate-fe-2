import React from 'react'
import TitleCards from './TitleCards'
import RatingAndPrice from '../organisems/RatingAndPrice'

export default function CardsNew({src, alt, avatar}) {
    return (
        <>
            <div className="card">
                <div className="card-wrapper">
                    <div className="card-image">
                        <img className="img-card" src={src} alt={alt}/>
                    </div>
                    <TitleCards />
                    <div className="mentor-card">
                        <img className="Avatar" src={avatar} />
                        <p>
                            <span className="title-mentor-name">Jenna Ortega</span>
                            <span className="title-mentor-experience">Senior Accountant di <span className="bold-text">Gojek</span></span>
                        </p>
                    </div>
                    <RatingAndPrice />
                </div>
            </div>
        </>
    )
}