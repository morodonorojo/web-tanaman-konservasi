import React from "react";
import clsx from "clsx";

function MainButton({ children, isActive, ...props }) {
  return (
    <button
      className={clsx(
        isActive && "rounded-full bg-forestgreen-900 text-white font-bold transition-all",
        !isActive && "text-mutedgray-900 transition-all",
        "cursor-pointer p-2 min-w-[80px]"
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default MainButton;
