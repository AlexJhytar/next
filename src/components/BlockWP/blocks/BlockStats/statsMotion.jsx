"use client"

import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const StatsMotion = ({children}) => {
  const block = useRef();
  const isVisible = useInView(block);
  
  return (
    <motion.section ref={block} className={`block-stats ${isVisible ? 'in-view' : ''}`}>
      {children}
    </motion.section>
  );
};

export default StatsMotion;