import React from "react";
import "./index.css";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <div className="news__navbar">
      <div className="news__navbar-container">
        <motion.h1
        //   initial={{ y: -100 }}
        //   whileInView={{ y: 100 }}
          whileInView={{ y: [-50, -20, 0], opacity: [0, 0, 1] }}
        //   animate={{ y: 110 }}
          transition={{ duration: 0.5 }}
        >
          NewsOnline
        </motion.h1>
      </div>
    </div>
  );
}

export default Navbar;
