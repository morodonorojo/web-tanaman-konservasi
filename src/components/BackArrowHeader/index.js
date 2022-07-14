import React from "react";
import Link from "next/link";

import BackArrow from "../../assets/icon/arrow.svg";

const BackArrowHeader = ({ plantName, href, ...props }) => {
  return (
    <div className="flex w-full flex-row items-center" {...props}>
      <Link href={href || "/"}>
        <div className="icon flex h-6 w-6 items-center justify-center rounded-full bg-forestgreen-900">
          <BackArrow className="scale-[80%]" />
        </div>
      </Link>
      <p className="ml-2 text-base font-semibold text-forestgreen-900">
        {plantName || "Cemara Laut"}
      </p>
    </div>
  );
};

export default BackArrowHeader;
