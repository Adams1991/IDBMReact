import React, { Component } from 'react';
import OpeningList from '../components/OpeningList.js';
import './OpeningBox.css';
class OpeningBox extends Component  {

  constructor(props){
    super(props)
    this.state = {
      listheader: "UK Opening This Week",
      openings: [
        {film: "Batman", id: 456,  link: "https://www.imdb.com/",   showtimetext: "Showtimes"},
        {film: "Not Batman", id: 123, link: "https://www.imdb.com/",   showtimetext: "Showtimes"}
      ],
      seemore: "See more openings this week"

    };

  }

  render(){
    return (
      <div>
      <h3>{this.state.listheader}</h3>
      <OpeningList openings = {this.state.openings} seeMore = {this.state.seemore} link={this.state.openings[0].link} showtimetext={this.state.openings[0].showtimetext}/>
      <div className="opening-box">
      <a href={this.state.openings[0].link}
        class="showtimelink">Get Showtimes >></a>
      </div>
      </div>
    );
  }


}

export default OpeningBox;
