import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";

import classes from './Header.module.css';
import Lowerheader from './Lowerheader';
function Header() {
  return (
    <>

    <section>
        <div className={classes.header__container}>
        <div className={classes.logo__container}>
            {/* logo from png.com*/}
            <a href="/">
        <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"/>
          </a>
     {/* delivery */}
    <div className={classes.delivery}>
    <span>
         {/* icon from react-icons*/}
          <FaLocationDot />
    </span>
        
        <div>
            <p>Delivery to</p>
            <span>Ethiopia</span>
        </div>
        </div>
        </div>
        
     

       {/* search */}
        <div className={classes.search}>
      <select name="" id="">
    <option value="">All</option>
     </select>
      <input type="text" name="" id="" placeholder="search product" />
        {/* icon from react-icons*/}
        <FaSearch size={25} />
        </div>
    

        
      {/* right side link */}
        <div  className={classes.order__container}>
        
        <a href="/" className={classes.language} >
        <img src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg" alt="united state flag"  />
        
        
        <select name="" id="">
  <option value="EN">EN</option>
       </select>
       </a>

        
    {/* three components */}
<a href="">

    <p>Sign In</p>
    <span>Account & Lists</span>

</a>


      {/* orders */}
<a href="">
    <p>returns</p>
    <span>& Orders</span>
</a>


   {/* Carts */}
< a href="/Cart"  className={classes.cart} >
      {/* icon from react-icons */}
      <BsCart4 size={35}/>
   <span>0</span>
</a>
       
        </div>
        </div>
    </section>
    <Lowerheader />
</>
  )
}

export default Header

