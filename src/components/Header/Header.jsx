import React, { useState } from "react";
import Logo from "./Logo";
import Button from "../Button/Button";
import Moon from "../../assets/icon-moon.svg";
import Sun from "../../assets/icon-sun.svg";
import { useTheme } from "../../contexts/ThemeContext";
import clsx from "clsx";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [iconError, setIconError] = useState(false);

  return (
    <div
      className={clsx(
        theme,
        "flex z-10 items-center justify-between dark:bg-neutral-800 bg-neutral-0 p-3 rounded-2xl dark:shadow-none shadow-sm border-[1px] dark:border-transparent border-neutral-200"
      )}
    >
      <Logo theme={theme} />
      <Button variant="icon-btn" onClick={toggleTheme}>
        {!iconError ? (
          <img
            src={theme === "dark" ? Sun : Moon}
            alt={theme === "dark" ? "sun-icon" : "moon-icon"}
            onError={() => setIconError(true)}
            className="w-5 h-5"
          />
        ) : (
          <span>{theme === "dark" ? "☀️" : "🌙"}</span>
        )}
      </Button>
    </div>
  );
}

// [ ] make Toolbar
// [ ] fix spacing
// [ ] make responsive layout
