import React from "react";
import { useTheme } from "./contexts/ThemeContext";
import clsx from "clsx";
import Header from "./components/Header/Header";
import ExtensionsGrid from "./components/ExtensionsGrid/ExtensionsGrid";
import ExtentionProvider from "./contexts/ExtenstionsContext";
import Toolbar from "./components/Toolbar/Toolbar";
import { motion } from "framer-motion";

export default function App() {
  const { theme } = useTheme();
  return (
    <motion.div
      className={clsx(
        theme,
        "min-h-dvh px-4 md:px-32  transition-colors py-8  flex flex-col space-y-12 md:space-y-16"
      )}
      style={{
        backgroundImage:
          theme === "dark" ? "var(--dark-gradient)" : "var(--light-gradient)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <ExtentionProvider>
        <div className="flex flex-col gap-8">
          <Toolbar />
          <ExtensionsGrid />
        </div>
      </ExtentionProvider>
    </motion.div>
  );
}
