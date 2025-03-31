import clsx from "clsx";
import React from "react";
import Button from "../Button/Button";
import ToggleButton from "../ToggleBtn/ToggleButton";
import { useState } from "react";
import { useExtentionContext } from "../../contexts/ExtenstionsContext";

export default function ExtensionCard({ cardInfo }) {
  const { logo, name, description, isActive } = cardInfo;
  const [isToggled, setIsActive] = useState(isActive);
  const [imageError, setImageError] = useState(false);
  const { removeExtenstion, toggleExtenstion } = useExtentionContext();

  return (
    <div
      className={clsx(
        "flex flex-col justify-between p-4 rounded-3xl h-52",
        "dark:bg-neutral-800 bg-neutral-0 shadow-sm",
        "border-[1px] border-neutral-300 dark:border-neutral-700",
        "transition-all duration-300 ease-in-out" // Add transition for smooth effect changes
      )}
    >
      <div className="flex gap-4 items-start">
        {!imageError ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-10 h-10 object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-10 h-10 bg-neutral-300 dark:bg-neutral-600 rounded flex items-center justify-center">
            {name.charAt(0)}
          </div>
        )}
        <div className="grow-1">
          <h2 className="text-xl mb-2 font-700 text-neutral-800 dark:text-neutral-0">
            {name}
          </h2>
          <p className="text-md font-500 text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button
          onClick={() => removeExtenstion(cardInfo)}
          variant={"normal-btn"}
          size={"md"}
        >
          Remove
        </Button>
        <ToggleButton
          action={() => toggleExtenstion(cardInfo)}
          isToggled={isToggled}
          setIsToggled={setIsActive}
        />
      </div>
    </div>
  );
}
