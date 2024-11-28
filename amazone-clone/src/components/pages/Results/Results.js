import React, { useEffect, useState } from 'react'
import LayOut from '../../LayOut/Lay0ut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import classes from './Results.module.css'
import {ProductUrl} from '../../../Api/Endpoint'
import ProductCard from '../../Product/ProductCard'

function Results() {
  const [results,setresults] = useState([])
  const {categoryName} = useParams()
  console.log("Category Name from Params:", categoryName);
  console.log(categoryName);
  useEffect(() =>{
    axios.get(`${ProductUrl}/products/category/${categoryName}`)
    // axios.get(`${ProductUrl}/products/category/electronics`)
    // https://fakestoreapi.com/products/category
    
    .then((res) =>{
      // console.log(res);
      setresults(res.data)
      console.log(res.data);

    } ).catch((err) =>{
      console.log(err);
      
    })
  }, [categoryName])

  return (

    <LayOut>
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category / {categoryName}</p>
      <hr />
      {/* <div className={classes.products_container}>
        {results?.map((product) => (
          <ProductCard
            key={product.id}
            product={product.name}
          />
        ))}
      </div> */}

      <div className={classes.products_container}>
  {results
    .filter((product) => product && product.image) // Filter products with valid image
    ?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
</div>
    </section>
  </LayOut>
  )
}

export default Results