import Image from "next/image";
import React from "react";

const IconCard = ({ icon, backgroundImage, children }) => {
  return (
    <div
      className="flex w-60 flex-col items-center justify-center rounded-md relative
     bg-forestgreen-100 p-3 text-center font-body text-lg font-semibold text-white"
    >
      <div className="z-30 flex flex-col">
        <Image
          src={icon.url}
          alt={icon.alt}
          width={32}
          height={32}
          style={{
            filter:
              "invert(99%) sepia(0%) saturate(5392%) hue-rotate(297deg) brightness(123%) contrast(100%)",
          }}
        />
        {children}
      </div>
      <div className="absolute h-full w-full z-10 rounded-md">
        <Image
          src={backgroundImage.url}
          alt={backgroundImage.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="absolute h-full w-full z-20 flex rounded-md bg-gradient-to-t from-forestgreen-900"></div>
    </div>
  );
};

export default IconCard;
