import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import CarouselItem from "./CarouselItem";

const Carousel = ({ imageData, ...props }) => {
  return (
    <div {...props} className="h-52 w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        pagination={true}
        modules={[Pagination]}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;