import React from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import classes from './Header.module.css';

function Lowerheader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <TiThMenuOutline />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Services</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default Lowerheader;
