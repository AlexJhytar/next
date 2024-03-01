"use client";

import React, { useEffect, useState } from 'react';
import Spoiler from "@/components/UI/Spoiler/spoiler";
import { gsap } from "gsap";

const FaqItems = ( {list} ) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    let listItem = gsap.utils.toArray(".spoiler");
    
    for (let i = 0; i < listItem.length; i++) {
      gsap.fromTo(
        listItem[i],
        {
          x: 0,
        },
        {
          x: 200,
          duration: 1,
          ease: "elastic",
          scrollTrigger: {
            trigger: listItem[i],
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }
  }, []);
  
  return list.map(( info, index ) => {
    const showTab = index === activeIndex ? "active" : "";
    
    return (
      <Spoiler
        key={index}
        index={index}
        classes={showTab}
        onClick={() => {setActiveIndex(index)}}
        title={info.question}
        content={info.answer}
      />
    )
  })
};

export default FaqItems;