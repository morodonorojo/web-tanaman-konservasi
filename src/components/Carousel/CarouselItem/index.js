import Image from "next/image";
import React from "react";

const CarouselItem = ({ src, alt, ...props }) => {
  return (
    <div className="relative h-full w-full" {...props}>
      <Image
        className="rounded-lg"
        src={src || "/image/dummy-plant-image.png"}
        alt={alt || "Image Carousel Item"}
        layout="fill"
        objectFit="cover   "
      />
    </div>
  );
};

export default CarouselItem;
