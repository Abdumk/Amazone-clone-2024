import React from 'react'
import Lay0ut from '../../LayOut/Lay0ut'
import CarouselEffect from '../../Carousel/CarouselEffect';
import Category from '../../Category/Category';

import Product from '../../Product/Product';
function Landing() {
  return (
    <Lay0ut>
 <CarouselEffect />
   <Category />
   <Product />

    </Lay0ut>
  )
}

export default Landing