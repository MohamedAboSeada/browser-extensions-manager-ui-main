import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {}, // Added to match the structure provided by ThemeProvider
});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // retrive saved theme in localStorage if exist or return default dark
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });

  // change theme in the localStorage when change
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
