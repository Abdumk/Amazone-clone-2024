import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from "../Product/Product.module.css"
import { Link } from 'react-router-dom';
function ProductCard({product,flex,renderDesc}) {
  const {image, title, id, rating,price,description } = product;
  const { rate } = product || {};

  
  
  return (
    <div className={` ${ classes.card__container} ${flex?classes.product__flexed:''} `}>  
<Link to={`/products/${id}`}>  

    <img src={image} alt='' />
</Link>
<div>
<h3>{title}</h3>

{renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}

<div className={ classes.rating}>
{/* rating npm install @mui/material @emotion/react @emotion/styled and npm install numeral*/}
 < Rating value ={rating?.rate} precision ={0.1}/> {/* give rate by 0.1 */}
{/* Count */}
<small>{rating?.count}</small>

</div>

<div>
{/* price */}
<CurrencyFormat amount = {price}  />

</div>
<button className={ classes.button}>
  add to cart
</button>

</div>




    </div>
  )
}

export default ProductCard