"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
const ProductDetail = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
    <Carousel
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      thumbWidth={60}
      className="productCarousel"
    >
      <img src="/movie.jpg" alt="img1" />
      <img src="/4.jpg" alt="img3" />
      <img src="/2.jpg" alt="img2" />
      <img src="/5.jpg" alt="img4" />
      <img src="/6.jpg" alt="img4" />

    </Carousel>
  </div>
  )
}

export default ProductDetail