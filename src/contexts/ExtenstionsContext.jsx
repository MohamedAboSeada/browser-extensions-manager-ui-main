import { createContext, useState, useEffect, useContext } from "react";
import data from "../assets/data.json";

const ExtentionContext = createContext({
  extenstions: data,
  filterCode: 0,
  setFilterCode: () => {},
  removeExtenstion: (extenstion) => {},
  toggleExtenstion: (extenstion) => {},
});

export default function ExtentionProvider({ children }) {
  const [extenstions, setExtenstions] = useState(() => {
    const savedData = localStorage.getItem("extenstions");
    return savedData ? JSON.parse(savedData) : data;
  });

  const [filterCode, setFilterCode] = useState(0);

  useEffect(() => {
    localStorage.setItem("extenstions", JSON.stringify(extenstions));
  }, [extenstions]);

  const removeExtenstion = (extenstion) => {
    const newExtenstions = extenstions.filter(
      (ext) => ext.name !== extenstion.name
    );
    setExtenstions(newExtenstions);
  };

  const toggleExtenstion = (extenstion) => {
    // Add a small delay to make animations more visible
    setTimeout(() => {
      setExtenstions((prev) =>
        prev.map((item) =>
          item.name === extenstion.name
            ? { ...item, isActive: !item.isActive }
            : item
        )
      );
    }, 50);
  };

  return (
    <ExtentionContext.Provider
      value={{
        extenstions,
        filterCode,
        removeExtenstion,
        toggleExtenstion,
        setFilterCode,
      }}
    >
      {children}
    </ExtentionContext.Provider>
  );
}

export function useExtentionContext() {
  return useContext(ExtentionContext);
}
