import React, {useContext} from 'react';
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Lowerheader from './Lowerheader';
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from '../../Utility/firebase';
import { Type } from '../../Utility/Action.type';

function Header() {


  const [state,dispatch] = useContext(DataContext)
  console.log(state.length);
  console.log(state.user);


  const { basket } = state;
  const totalItem = basket?.reduce((amount,item) => {

    return item.amount+amount


  } ,0)

   // handle-sign-out
   const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: Type.SIGN_OUT }); // Dispatch the action
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
     <section className={classes.fixed} >

    <section>
        <div className={classes.header__container}>
        <div className={classes.logo__container}>
            {/* logo from png.com*/}
            <Link to="/">
        <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"/>
          </Link>
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
        
        <Link to="/" className={classes.language} >
        <img src="https://www.shutterstock.com/shutterstock/photos/2477519645/display_1500/stock-vector-american-flag-usa-design-united-states-flag-rendered-usa-flag-the-usa-national-flag-2477519645.jpg" alt="united state flag"  />
        
        
        <select name="" id="">
  <option value="EN">EN</option>
       </select>
       </Link>

        
    {/* three components */}
{/* <Link to="/auth">

    <p>Sign In</p>
    <span>Account & Lists</span>

</Link> */}
   {/* <Link to={/user && "/auth"} >
            <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link> */}



<div>
  {state.user != null ? (
    <>
      <p>Hello, {state.user.email?.split("@")[0]}</p>
      <span onClick={handleSignOut} style={{ cursor: "pointer", color: "blue" }}>
        Sign Out
      </span>
    </>
  ) : (
    <Link to="/auth">
      <p>Hello, Sign In</p>
      <span>Account & Lists</span>
    </Link>
  )}
</div>


      {/* orders */}
<Link to="/orders">
    <p>returns</p>
    <span>& Orders</span>
</Link>


   {/* Carts */}
< Link to="/cart"  className={classes.cart} >
      {/* icon from react-icons */}
      <BsCart4 size={35}/>
   <span>{totalItem}</span>
</Link>
       
        </div>
        </div>
    </section>
    <Lowerheader />
</section>
  )
}

export default Header

