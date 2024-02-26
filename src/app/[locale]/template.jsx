"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Template( {children} ) {
  const [pageLoaded, usePageLoaded] = useState('0');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      usePageLoaded('1');
    }, 500);
    
    window.addEventListener("beforeunload", ()=> {
      usePageLoaded('0');
    })
  }, [usePageLoaded]);
  
  const anim = variants => {
    return {
      initial: 'initial',
      animate: 'animate',
      exit: 'exit',
      variants
    }
  }
  
  const slideIn = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: ["-100%", "0%", "100%"],
    },
    exit: {
      y: ["-100%", "0%", "100%"],
    }
  }
  
  return (
    <>
      <motion.div
        className="page-wrap" style={{opacity: `${pageLoaded}`}}>
        {children}
      </motion.div>
      <motion.div
        className="slidePageIn"
        {...anim(slideIn)}
        transition={{duration: 1.2, type: 'easeIn'}}
      ></motion.div>
    </>
  )
}