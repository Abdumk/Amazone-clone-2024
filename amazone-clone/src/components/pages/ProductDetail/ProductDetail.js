import React, {useEffect, useState } from 'react';
import classes from './ProductDetail.module.css';
import Lay0ut from '../../LayOut/Lay0ut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductUrl } from '../../../Api/Endpoint.js';
import ProductCard from '../../../components/Product/ProductCard';
import Loder from './../../Loder/Loder';


function ProductDetail() {
   const { productId } = useParams();
// console.log(productId );   // give 1 in browser
const [product, setProduct] = useState({});
const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true)
    axios.get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
        setisLoading(false)
      }).catch((err) => {
        console.log(err);
        setisLoading(false)
      });
  }, [productId]);
  // adding for fix Render loading state if product is not available yet
  // if (!product) {
  //   return <div>Loading...</div>; 
  // }
  return (

    
  <Lay0ut>
  <div className={classes.product_detail_container}>
    {isLoading ? (
      <div className={classes.loader_container}>
        <Loder />
      </div>
    ) : (
      <div className={classes.product_detail_card}>
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      </div>
    )}
  </div>
</Lay0ut>
  )
}

export default ProductDetail
