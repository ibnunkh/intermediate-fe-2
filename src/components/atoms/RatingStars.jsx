import React from 'react'

export default function RatingStars() {
    return (
        <>
            <div className="stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star-half-full" style={{color: "#FCE91B"}}></span>
                <span className="fa fa-star nonCheck"></span>
                <span className="fa fa-star nonCheck"></span>
            </div> 
        </>
    )
}