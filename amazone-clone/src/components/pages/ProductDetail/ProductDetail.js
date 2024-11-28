import React, {useEffect, useState } from 'react';
import clases from './ProductDetail.module.css'
import Lay0ut from '../../LayOut/Lay0ut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductUrl } from '../../../Api/Endpoint.js';
import ProductCard from '../../../components/Product/ProductCard';


function ProductDetail() {
   const { productId } = useParams();
// console.log(productId );   // give 1 in browser
const [product, setProduct] = useState(null);
  useEffect(() => {
    axios.get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
      }).catch((err) => {
        console.log(err);
      });
  }, [productId]);
  if (!product) {
    return <div>Loading...</div>; // Render loading state if product is not available yet
  }
  return (

    
    <Lay0ut>
    <ProductCard  
    product={product}
    />
   
   
    </Lay0ut>
  )
}

export default ProductDetail
