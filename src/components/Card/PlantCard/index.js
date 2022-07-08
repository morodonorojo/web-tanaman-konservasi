import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { LearnMoreButton } from "../../Button";

const PlantCard = ({
  plantName,
  srcImage,
  altImage,
  href,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "rounded-lg shadow-lg bg-mutedgray-50 w-[200px] h-[300px] p-3 relative overflow-clip flex items-end mx-auto"
      )}
      {...props}
    >
      <p className="plant-name font-bold text-white text-xl origin-top-left rotate-90 left-10 top-4 absolute z-10 w-full">
        Cemara Laut
      </p>
      <div className="absolute w-full h-full scale-125 -right-4 -bottom-4">
        <Image
          src="/image/cemara.png"
          alt="Pohon cemara"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <LearnMoreButton className="z-10">Pelajari Lebih Lanjut</LearnMoreButton>
    </div>
  );
};

export default PlantCard;
