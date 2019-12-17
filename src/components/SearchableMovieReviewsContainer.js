import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3VGYfs6cW0PSV2oABBOB5qUDBZzGCY19';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews:[],
             searchTerm:"Marvel"
        }
    }
   componentWillUpdate(){
    fetch(URL+`&query=${this.state.searchTerm}`).then(json=>json.json()).then(json=>this.setState({reviews:json.results}))
   }
    onSub=(event)=>{
        event.preventDefault()
console.log(event.target[0].value);
this.setState({searchTerm:event.target[0].value})
    }
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form action="" onSubmit={this.onSub}>
                    <input type="text"/>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
