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
        "relative mx-auto flex h-[300px] w-[200px] items-end overflow-clip rounded-lg bg-mutedgray-50 p-3 shadow-lg"
      )}
      {...props}
    >
      <p className="plant-name absolute left-10 top-4 z-10 w-full origin-top-left rotate-90 text-xl font-bold text-white">
        Cemara Laut
      </p>
      <div className="absolute -right-4 -bottom-4 h-full w-full scale-125">
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
