"use client"
import React, { useRef } from 'react';
import {motion, useInView} from "framer-motion";

const QuoteMotion = ({children}) => {
  const block = useRef();
  const isVisible = useInView(block);
  
  return (
    <motion.div data-theme="dark" ref={block}
         className={`block-quote ${isVisible ? 'in-view' : ''}`}>
      {children}
    </motion.div>
  );
};

export default QuoteMotion;