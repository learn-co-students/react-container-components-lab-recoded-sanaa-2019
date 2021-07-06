import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();
        this.state = {
            reviews:[],
            searchTerm:''
        }
    }
    handleFetch = () =>{
        fetch(URL).then(res=>res.json()).then(data=>{
            let result = data.results.filter(filtered=>{
                return filtered.display_title.includes(this.state.searchTerm)
            })
            this.setState({
                reviews:result
            })
        }).catch(err=>console.log(err));
    }
    handleInputChange = event =>{
        this.setState({
            searchTerm:event.target.value
        })
    }
    handleFromSubmit = event =>{
        event.preventDefault();
        this.handleFetch()
    }
    render(){
        return(
            <div className='review-list' >
            <form onSubmit={this.handleFromSubmit} >
            <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} />
            <button>Search</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}