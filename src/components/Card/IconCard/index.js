import Image from "next/image";
import React from "react";

const IconCard = ({ Icon, children }) => {
  return (
    <div
      className="flex w-60 flex-col items-center justify-center rounded-md
     bg-forestgreen-100 p-3 text-center font-body text-lg font-bold text-white"
    >
      <div>
        <Image
          src="/image/sun.png"
          alt="dummy doang gan"
          width={32}
          height={32}
        />
      </div>
      {children}
    </div>
  );
};

export default IconCard;
