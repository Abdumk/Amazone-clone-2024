import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from "../Product/Product.module.css"
import { Link } from 'react-router-dom';
function ProductCard({product}) {
  const {image, title, id, rating,price } = product;
  const { rate } = product || {};

  
  
  return (
    <div className={ classes.card__container}>
<Link to={`/products/${id}`}>  

    <img src={image} alt='' />
</Link>
<div>
<h3>{title}</h3>
{/* const { rate } = product || {};..... 8,21-24 is additional input code to fix */}
<div>
      <h1>{product?.name || "Unnamed Product"}</h1>
      <p>Rating: {rate || "N/A"}</p>
    </div>
<div className={ classes?.rating}>
{/* rating npm install @mui/material @emotion/react @emotion/styled and npm install numeral*/}
 < Rating value ={rating.rate} precision ={0.1}/> {/* give rate by 0.1 */}
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