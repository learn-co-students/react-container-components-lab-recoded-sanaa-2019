import React from 'react';

const MovieReviews = ({ reviews }) =>
    // 
    <div className="review-list">
        {reviews.map(one => {
            return <div className="review"><h1>{console.log(one.display_title)} {one.display_title}</h1><p>{one.summary_short}</p></div>
        })}
    </div>



export default MovieReviews;