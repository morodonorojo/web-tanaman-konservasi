import React from "react";
import clsx from "clsx";

function MainButton({ children, isActive, ...props }) {
  return (
    <button
      className={clsx(
        isActive &&
          "bg-forestgreen-900 font-semibold text-white transition-all",
        !isActive &&
          "text-mutedgray-900 hover:bg-forestgreen-50 hover:text-white transition-all",
        "min-w-[80px] cursor-pointer p-2 duration-500 rounded-full"
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default MainButton;
