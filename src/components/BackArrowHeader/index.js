import React from "react";
import Link from "next/link";

import BackArrow from "../../assets/icon/arrow.svg";

const BackArrowHeader = ({ plantName, plantNameLatin, href, ...props }) => {
  return (
    <div
      className="flex w-full flex-row items-center cursor-pointer"
      {...props}
    >
      <Link href={href || "/"}>
        <div className="flex flex-row">
          <div className="icon flex h-6 w-6 items-center justify-center rounded-full bg-forestgreen-900">
            <BackArrow className="scale-[80%]" />
          </div>
          <p className="ml-2 text-base font-semibold text-forestgreen-900">
            {plantName}
          </p>
          <p className="ml-1 text-base font-semibold text-forestgreen-900 italic">
            ({plantNameLatin})
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BackArrowHeader;
