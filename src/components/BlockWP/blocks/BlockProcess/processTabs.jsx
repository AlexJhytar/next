"use client";

import React, { useState } from 'react';
import LinearProgress from "@mui/material/LinearProgress";
import ProcessContent from "@/components/BlockWP/blocks/BlockProcess/processContent";
import ProcessNav from "@/components/BlockWP/blocks/BlockProcess/processNav";

const ProcessTabs = ({navTabs, contentTabs}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  
  const contentRender = contentTabs.map(( item, index ) => {
    
    const showContent = index === activeIndex ? `active` : "";
    return (<ProcessContent item={item}
                            key={index}
                            index={index}
                            state={showContent}
                            caption={item.caption}
                            text={item.text}
    />)
  })
  
  const navRender = navTabs.map(( item, index ) => {
    const showTab = index === activeIndex ? "active" : "";
    return (<ProcessNav
      key={index}
      item={item}
      index={index}
      state={showTab}
      onClick={( event ) => {
        event.preventDefault();
        setActiveIndex(index);
        setProgress(index*14);
      }}
    />)
  })
  
  return (
    <div className="process__tabs">
      {contentRender}
      
      <div className="process__nav">
        <ul className="process__nav_list">
          {navRender}
        </ul>
        
        <LinearProgress className="process-progress"
                        variant="determinate" value={progress}/>
      </div>
    </div>
  );
};

export default ProcessTabs;