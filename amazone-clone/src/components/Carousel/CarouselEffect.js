import React from 'react'
import {img} from "./images/data"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from "./CarouselEffect.module.css"
function CarouselEffect() {
  return (
    <div>
<Carousel
autoPlay={true}
infiniteLoop={true}
showIndicators={false}
showThumbs={false}
>
{
img.map((imageItemLink) => {
    return <img src={imageItemLink} />
})

}

</Carousel>
<div className={ classes.hero__img} ></div>
    </div>
  )
}

export default CarouselEffect