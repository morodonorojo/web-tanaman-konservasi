import Link from "next/link";
import React from "react";

const LearnMoreButton = ({ href, children, className, ...props }) => {
  return (
    <Link href={href || "/"}>
      <button
        className={`mx-auto h-fit min-w-[80px] cursor-pointer rounded-full border-2 border-white px-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white hover:text-mutedgray-900 ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default LearnMoreButton;
