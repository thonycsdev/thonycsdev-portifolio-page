import React from "react";
import { motion } from "framer-motion";
export const MotionDiv = () => {
  return (
    <motion.div
      className="h-10 w-10 bg-gray-50"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 100 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    />
  );
};
