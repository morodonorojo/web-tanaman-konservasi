import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
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
      <p className="plant-name absolute left-10 top-4 z-10 w-full origin-top-left rotate-90 text-xl font-semibold text-white">
        {plantName}
      </p>
      <div className="absolute -right-4 -bottom-4 h-full w-full scale-125">
        <Image
          src={srcImage}
          alt={altImage}
          width={200}
          height={300}
          objectFit="contain"
        />
      </div>
      <Link href={`/tanaman/${href}` || "/tanaman/cemara"}>
        <LearnMoreButton className="z-10">
          Pelajari Lebih Lanjut
        </LearnMoreButton>
      </Link>
    </div>
  );
};

export default PlantCard;
