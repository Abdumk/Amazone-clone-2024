// import React, { useState } from 'react';
// import { TiThMenuOutline } from "react-icons/ti";
// import classes from './Header.module.css';

// function Lowerheader() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className={classes.lower__container}>
//       <ul>
//         <li onClick={toggleMenu} className={classes.menuToggle}>
//           <TiThMenuOutline />
//           <p>All</p></li>
        
//         {/* Conditionally render the menu items */}
//         <div className={`${classes.menuItems} ${menuOpen ? classes.show : ''}`}>
//           <li>Today's Deals</li>
//           <li>Customer Services</li>
//           <li>Registry</li>
//           <li>Gift Cards</li>
//           <li>Sell</li>
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default Lowerheader;



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