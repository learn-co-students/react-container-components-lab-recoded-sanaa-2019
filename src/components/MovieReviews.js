// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ review }) =>
    // { console.log(review); }
    <div className="review-list">
        {review.map(one => {
            return <div className="review"><h1>{one.display_title}</h1><p>{one.summary_short}</p></div>
        })}
    </div>



export default MovieReviews;

