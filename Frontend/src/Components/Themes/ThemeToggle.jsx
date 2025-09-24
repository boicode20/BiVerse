import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react"; 
import { ThemesContext } from "./ThemeProvider";
import './theme.css'
const ThemeToggle = () => {
  const { isDark, setIsDark } = useContext(ThemesContext);
  console.log(isDark)
  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="relative flex items-center cursor-pointer w-10 h-5 rounded-full bg-[#bfbfbf] dark:bg-[#45565c] p-1"
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Sliding Knob */}
      <motion.div
        className="absolute w-4 h-3 rounded-full shadow-md flex items-center justify-center bg-white"
        animate={{
          x: isDark ? 15 : 0, // <-- 64 - 24 = 40px
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {isDark ? (
          <Moon size={10} className="text-gray-800" />
        ) : (
          <Sun size={10} className="text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
