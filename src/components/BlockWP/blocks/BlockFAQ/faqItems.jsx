"use client";

import React, { useState } from 'react';
import Spoiler from "@/components/UI/Spoiler/spoiler";

const FaqItems = ( {list} ) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
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