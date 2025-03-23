import React from 'react'
import RatingStars from '../atoms/RatingStars'
import RatingNumber from '../atoms/RatingNumber'
import Price from '../atoms/Price'

export default function RatingAndPrice() {
    return (
        <>
            <div className="rating-and-price">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <RatingStars />
                <RatingNumber />
                <Price />
            </div>  
        </>
    )
}