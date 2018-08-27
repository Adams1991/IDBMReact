import React from 'react';
import './Opening.css';


const Opening = function(props) {
    return (
      <li>
        <img></img>
        <a href={props.link} class="showtimetext">  {props.children}</a>
        <a href={props.link} >  {props.showtimetext}</a>
      </li>
    );
}

export default Opening;
