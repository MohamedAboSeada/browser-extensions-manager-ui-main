import React from "react";
import ExtensionCard from "../ExtensionCard/ExtensionCard";
import { useExtentionContext } from "../../contexts/ExtenstionsContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExtensionsGrid() {
  const { extenstions, filterCode } = useExtentionContext();
  const [filteredExtenstions, setFilteredExtenstions] = useState(extenstions);

  useEffect(() => {
    // Apply filter
    let filtered;
    if (filterCode === 0) filtered = extenstions;
    else if (filterCode === 1)
      filtered = extenstions.filter((ext) => ext.isActive);
    else if (filterCode === -1)
      filtered = extenstions.filter((ext) => !ext.isActive);

    setFilteredExtenstions(filtered);
  }, [filterCode, extenstions]);

  // Container variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Item variants for each card
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence mode="wait">
        {filteredExtenstions.map((item, index) => (
          <motion.div
            key={item.name || index}
            variants={itemVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            layout
          >
            <ExtensionCard cardInfo={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
