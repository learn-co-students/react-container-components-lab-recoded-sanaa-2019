import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list col raw ">
      {props.reviews.map(movie => (
        <div className="card review float-left m-2" style={{ width: "18rem" }}>
          <img
            src={movie.multimedia ? movie.multimedia.src : ""}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{movie.display_title}</h5>
            <p className="card-text">{movie.summary_short}</p>
            <a href={movie.link.url} className="btn btn-primary">
              Go Review
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;