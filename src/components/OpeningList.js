import React from 'react';
import Opening from './Opening.js';
import './OpeningList.css';


const OpeningList = function(props) {
   const openingComponents = props.openings.map((opening) => {
     return (<Opening key={opening.id} link={opening.link} showtimetext={opening.showtimetext}>{opening.film}</Opening>)
   });


   return (
     <div>
     <ul class="list">{openingComponents}</ul>
     <a href={props.link}>{props.seeMore}</a>
     </div>
   );
}



export default OpeningList;
