import React from "react";
import { motion } from "framer-motion";
const ButtonAnimation = ({ children }) => {
  return (
    <motion.button
      whileInView={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 3000 }}
      className="hover:scale-105 hover:shadow-lg transition-all duration-300 case-in-out"
    >
      {children}
    </motion.button>
  );
};

export default ButtonAnimation;
