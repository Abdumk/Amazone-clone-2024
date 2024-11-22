import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <section>
    <section>
        <div>
            {/* logo from png.com*/}
            <Link to="/">
        <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
        />
    </Link>
    {/* delivery */}
    <span>
         {/* icon from react-icons*/}
          <FaLocationDot />
    </span>
        </div>
        <div>
            <p>Delivery to</p>
            <span>Ethiopia</span>
        </div>


        <div>
          {/* search */}
<select name="" id="">
    <option value="">All</option>
</select>
<input type="text" name="" id="" placeholder="search product" />
        {/* icon from react-icons*/}
        <FaSearch />
        </div>

        
      {/* right side link */}
        <div>
        <div>
        <img src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg" alt="united state flag"  />
        <select>
  <option value="EN">EN</option>
</select>



        </div>
    {/* three components */}
< Link to="">
<div>
    <p>Sign In</p>
    <span>Account & Lists</span>
</div>
</Link>


      {/* orders */}
< Link to="">
    <p>returns</p>
    <span>& Orders</span>
</Link>


   {/* Carts */}
< Link to="/Cart">
      {/* icon from react-icons */}
      <BsCart4 />
   <span>0</span>
</Link>


        </div>
    </section>
    </section>
</>
  )
}

export default Header