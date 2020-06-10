import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {Navbar, Nav} from 'react-bootstrap';
import '../css/Homepage.css';
import Movie from '../Components/Movie';
import SearchBar from '../Components/SearchBar'
import { Link, Redirect } from "react-router-dom";

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userID:null,
            movieData:null,
            searchQuery:null,
            pageNumber:1,
            pageSection:0
        }
    }

    getUserFavourites = () => {


        fetch(`/favourites/${this.props.userId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error =>{
            console.log(error)
        })
    }



   
    render(){

            return (
                <div>
                     
                    <SearchBar userId={this.props.userId} />

                    <div className="userFavouritesContainer">

                        <h1>hello world</h1>
                        <button onClick={this.getUserFavourites}></button>

                    </div>
                </div>

            )
          
        
    }
}

export default Homepage;

