import Image from "next/image";
import React from "react";

const IconCard = ({ icon, children }) => {
  return (
    <div
      className="flex w-60 flex-col items-center justify-center rounded-md
     bg-forestgreen-100 p-3 text-center font-body text-lg font-semibold text-white"
    >
      <div>
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
      </div>
      {children}
    </div>
  );
};

export default IconCard;
