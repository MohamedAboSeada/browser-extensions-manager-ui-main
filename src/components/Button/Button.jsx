import React from "react";
import clsx from "clsx";

export default function Button({ variant, isActive, children, size, ...rest }) {
  return (
    <button
      className={clsx(
        "cursor-pointer dark:text-neutral-100 font-600 capitalize outline-transparent outline-offset-2 outline-3 focus:outline-red-400",
        variant === "icon-btn" &&
          "grid dark:bg-neutral-600 place-items-center p-3 rounded-lg",
        variant === "normal-btn" &&
          "py-2 px-5 rounded-full border dark:border-neutral-600 border-neutral-300 shadow-xs",
        size === "lg" ? "text-lg" : size === "md" ? "text-md" : "text-sm",
        isActive
          ? "dark:bg-red-500 dark:border-red-500 bg-red-700 border-red-700 text-neutral-100 dark:text-neutral-900"
          : "dark:bg-neutral-800 bg-neutral-0"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
