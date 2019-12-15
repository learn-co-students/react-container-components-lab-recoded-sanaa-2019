// Code MovieReviews Here
import React from 'react';
const MovieReviews = ({reviews}) =>(
    <div className="review-list">
    {reviews.map(review => {
        return(
            <div className="review" ><h3>{review.display_title}</h3><span>{review.critics_pick}</span></div>
        )
    })}
    </div>
) 

export default MovieReviews;