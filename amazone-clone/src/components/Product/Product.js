
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "../Product/Product.module.css"

function Product() {
    // const {Products, setProducts} = useState()
    const [Products, setProducts] = useState([]);
    useEffect(() => {
axios.get('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res)
    setProducts(res.data)
}).catch((err) => {
    console.log(err)
})
    },[])


  return (
    <section className={ classes.products_container}>
     
     {
Products.map((singleproduct) => (

  <ProductCard product ={singleproduct} key={singleproduct?.id} />
))




     }






    </section>
  )
}

export default Product