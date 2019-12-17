// Code MovieReviews Here
import React from 'react'

let  MovieReviews=(props)=> {
    let mapper=(reviews)=>{
        return reviews.map(e=>{
             return <div className="review">
        <h3>{e.headline}</h3>
        <li>Byline: {e.byline}</li>
        <li>Title: {e.display_title}</li>
        <li>critics pick: {e.critics_pick}</li>
        <li>Date Updated: {e.date_updated}</li>
             </div>

            })
    }
    return (
        <div className="review-list">
            {mapper(props.reviews)}


        </div>
    )
}
export default MovieReviews;
// byline: "Jeannette Catsoulis"
// critics_pick: 1
// date_updated: "2019-12-16 17:44:14"
// display_title: "The Aeronauts"
// headline: "‘The Aeronauts’ Review: High Anxiety"
// link: {type: "article", url: "http://www.nytimes.com/2019/12/05/movies/the-aeronauts-review.html", suggested_link_text: "Read the New York Times Review of The Aeronauts"}
// mpaa_rating: "PG-13"
// multimedia: {type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2019/12/06/arts/aeronauts1/aeronauts1-mediumThreeByTwo210.jpg", width: 210, height: 140}
// opening_date: "2019-12-06"
// publication_date: "2019-12-05"
// summary_short: "Felicity Jones and Eddie Redmayne reach for the skies in this charming Victorian ballooning adventure."
// __proto__: Object
