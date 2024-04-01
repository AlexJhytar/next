"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

const ProcessLayout = ( {children}) => {
  const block = useRef();
  const control = useAnimation();
  const isVisible = useInView(block);
  const styleBox = {
    initial: {
      opacity: 0,
    }, action: {
      opacity: 1, transition: {
        ease: "linear", duration: .7, staggerChildren: 0.2, when: "beforeChildren"
      },
    },
  }
  
  useEffect(() => {
    if (!isVisible) {
      control.start("initial");
    }
    else {
      control.start("action");
    }
  })
  
  return (
    <motion.section className="process"
                    ref={block}
                    variants={styleBox}
                    animate={control}
                    initial="initial">
      {children}
    </motion.section>
  );
};

export default ProcessLayout;