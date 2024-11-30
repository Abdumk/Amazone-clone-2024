
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "../Product/Product.module.css"
import Loder from '../Loder/Loder';

function Product() {
    // const {Products, setProducts} = useState()
    const [Products, setProducts] = useState([]);
const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
axios.get('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res)
    setProducts(res.data)
    setisLoading(false)
}).catch((err) => {
    console.log(err)
    setisLoading(false)
})
    },[])


  return (
<>  
{isLoading? (<Loder />):(  <section className={ classes.products_container}>
     
     {
Products.map((singleproduct) => (

      
      <ProductCard renderAdd={true} product ={singleproduct} key={singleproduct?.id} />
))
     }
    </section>)}

  
    </>
  )
}

export default Product