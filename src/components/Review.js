import React from 'react';

const Review = ({title,criticPick}) => <div className="review" style={{padding:20,boxShadow:'0 0 5px #ccc',borderRadius:'5px'}}><h3>{title}</h3><span>{criticPick}</span></div>

export default Review;