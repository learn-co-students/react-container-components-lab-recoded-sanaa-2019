// Code MovieReviews Here

import React from 'react';


const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(rev => {
    return(
        <div className="review" ><h3>{rev.display_title}</h3><span>{rev.critics_pick}</span></div>
    )
})}</div>

export default MovieReviews;