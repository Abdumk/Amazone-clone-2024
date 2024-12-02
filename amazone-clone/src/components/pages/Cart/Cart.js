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

