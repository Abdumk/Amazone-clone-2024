import React, { useContext }  from 'react'
import Lay0ut from '../../LayOut/Lay0ut'
import { DataContext } from '../../DataProvider/DataProvider';
import classes from './Cart.module.css'
import ProductCard from './../../Product/ProductCard';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../../Utility/Action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{basket,user}, dispatch] = useContext(DataContext);
  // these reduce is array methode used to hold previous value then add current value
  const total = basket.reduce((amount,item) =>{
    return  item.price *item.amount + amount
  } ,0)
  console.log(basket);

  const increment =(item)=>{
dispatch({
  type:Type.ADD_TO_BASKET,
  item
})

  }

  const decrement =(id)=>{
    dispatch({
    type:Type.REMOVE_FROM_BASKET,
    id
  })
  
    }
      const removeFromCart = (id) => {
        console.log(`id------`, id);
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: id, // Pass the item's unique identifier
    });
  };

  return (
    <Lay0ut>

      <section className= {classes.container}>
   <div    className= {classes.cart__container}>
   <h3>Your Shopping Cart</h3>
<hr />


{basket?.map((item, i) => ( 
  <section key={i} className={classes.cart_product}>
    <ProductCard 
      product={item}
      renderDesc={true}
      renderAdd={false}
      flex={true}
    />
    <div className={classes.btn_product}>
      <button className={classes.btn} onClick={() => increment(item)}>
        <IoIosArrowUp size={20} />
      </button>
      <span>{item.amount}</span>
      <button className={classes.btn} onClick={() => decrement(item.id)}>
        <IoIosArrowDown size={20}/>
      </button>
      <button className={classes.btn}
                  onClick={() => removeFromCart(item.id)}
                  
                >
                  Remove from Cart
                </button>
    </div>
  </section>
))}

          
       
      
      </div>

      {basket?.length !==0&&(
   <div  className= {classes.subtotal}> 
    
    <div>
      <p> Subtotal({basket.length}item)</p>
      <CurrencyFormat amount ={total} />
     
      
    </div> 
    <span>  
<input type ="checkbox" />
<small>This order contain agift <br/>
  <Link to='/payments'>continue to checkout</Link>
  </small>


    </span>
    
    
     </div>)}
   </section>
       </Lay0ut>
    
  )
}

export default Cart

// import React, { useContext } from 'react';
// import { DataContext } from '../../DataProvider/DataProvider';
// import { Type } from '../../../Utility/Action.type';
// import CurrencyFormat from '../../pages/Cart/CurrencyFormat';
// import classes from './Cart.module.css'; // Example CSS file
//  import Lay0ut from '../../LayOut/Lay0ut'
// import ProductCard from './../../Product/ProductCard';


// function Cart() {
//   // Access the state and dispatch from DataContext
//   const [state, dispatch] = useContext(DataContext);
//   const { basket } = state;

//   // Function to remove item from cart
//   const removeFromCart = (id) => {
//     dispatch({
//       type: Type.REMOVE_FROM_BASKET,
//       id: id, // Pass the item's unique identifier
//     });
//   };

//   return (
//     <Lay0ut>
//     <div className={classes.cart}>
//       <h2>Your Shopping Cart</h2>

//       {basket.length === 0 ? (
//         <p>Your cart is empty. Add some products to see them here.</p>
//       ) : (
//         <div className={classes.cartItems}>
//           {basket.map((item, index) => (
//             <div key={index} className={classes.cartItem}>
//               <img src={item.image} alt={item.title} />
//               <div className={classes.itemDetails}>
//                 <h3>{item.title}</h3>
//                 <CurrencyFormat amount={item.price} />
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className={classes.removeButton}
//                 >
//                   Remove from Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Total Price */}
//       {basket.length > 0 && (
//         <div className={classes.cartTotal}>
//           <h3>
//             Total Items: <span>{basket.length}</span>
//           </h3>
//           <CurrencyFormat
//             amount={basket.reduce((total, item) => total + item.price, 0)}
//           />
//         </div>
//       )}
//     </div>
//     </Lay0ut>
//   );
// }

// export default Cart;


