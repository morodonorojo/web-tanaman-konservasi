import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import CarouselItem from "./CarouselItem";

const Carousel = ({ imageData, ...props }) => {
  return (
    <div {...props} className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        pagination={true}
        modules={[Pagination]}
        loop={true}
        className="h-full aspect-[3/2]"
      >
        {imageData.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouselItem alt={image.Image.alt} src={image.Image.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
