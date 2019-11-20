// Code MovieReviews Here
import React from "react";

const MovieReviews = ({ name, summaryShort, url, src }) => {
  return (
    
      <ul className="review-list col ">
        <div className="card review float-left m-2" style={{ width: "18rem" }}>
          <img src={src} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{summaryShort}</p>
            <a href={url} className="btn btn-primary">
              Go Review
            </a>
          </div>
        </div>
      </ul>
    
  );
};

export default MovieReviews;
