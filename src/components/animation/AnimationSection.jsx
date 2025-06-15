import React from "react";
import { motion } from "framer-motion";

const AnimationSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
        bounce: 0.3,
        duration: 0.8,

        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationSection;
