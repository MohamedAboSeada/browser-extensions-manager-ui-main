import clsx from "clsx";
import React from "react";

export default function ToggleButton({ isToggled, setIsToggled, action }) {
  return (
    <button
      className={clsx(
        "relative w-[50px] rounded-full border-[3px] outline-2 outline-offset-2 outline-transparent cursor-pointer focus:outline-red-500",
        isToggled
          ? "bg-red-700 border-red-700 dark:bg-red-500 dark:border-red-500"
          : "bg-neutral-300 border-neutral-300 dark:border-neutral-600 dark:bg-neutral-600"
      )}
      onClick={() => {
        action();
        setIsToggled((prev) => !prev);
      }}
    >
      <p
        className={clsx(
          "w-[20px] h-[20px] rounded-full bg-neutral-0 transition-transform",
          isToggled ? "translate-x-[25px]" : "translate-x-0"
        )}
      ></p>
    </button>
  );
}
