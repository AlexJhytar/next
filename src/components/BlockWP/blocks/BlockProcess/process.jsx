"use client"

import React, { useEffect, useRef, useState, memo } from 'react';
import BlockTag from "../BlockTag/blockTag";
import "./process.scss";
import ProcessNav from "./processNav";
import ProcessContent from "./processContent";
import { motion, useAnimation, useInView } from "framer-motion";
import LinearProgress from '@mui/material/LinearProgress';

const BlockProcess = ({getBlock, pageLoaded, expiryTimestamp}) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const block = useRef();
   const isVisible = useInView(block);
   const control = useAnimation();
   const [progress, setProgress] = React.useState(0);
   
   const styleBox = {
	 initial: {
	    opacity: 0,
	 }, action: {
	    opacity: 1, transition: {
		  ease: "linear", duration: .7, staggerChildren: 0.2, when: "beforeChildren"
	    },
	 },
   }
   
   const navTabs = [];
   const contentTabs = [];
   for (let i = 0; i < getBlock[0].list.procces_list; i++) {
	 const list = 'procces_list_' + [i];
	 const tabTitle = list + '_procces_title';
	 const contentCaption = list + '_caption';
	 const contentText = list + '_text';
	 const img = list + '_procces_icon_image_data';
	 
	 navTabs.push({
	    title: getBlock[0].list[tabTitle] || '',
	    url: getBlock[0].list[img].url_full || '',
	    width: getBlock[0].list[img].width || '',
	    height: getBlock[0].list[img].height || '',
	 });
	 
	 contentTabs.push({
	    caption: getBlock[0].list[contentCaption] || '', text: getBlock[0].list[contentText] || ''
	 })
   }
   
   useEffect(() => {
	 if (!isVisible) {
	    control.start("initial");
	 } else {
	    control.start("action");
	 }
   })
   
   const contentRender = contentTabs.map((item, index) => {
	 
	 const showContent = index === activeIndex ? `active` : "";
	 
	 return (<ProcessContent item={item}
						key={index}
						index={index}
						state={showContent}
						caption={item.caption}
						text={item.text}
		 />)
   })
   
   const navRender = navTabs.map((item, index) => {
	 const showTab = index === activeIndex ? "active" : "";
	 return (<ProcessNav
			 key={index}
			 item={item}
			 index={index}
			 state={showTab}
			 onClick={(event) => {
			    event.preventDefault();
			    setActiveIndex(index);
			    setProgress(index * 14);
			 }}
		 />)
   })
   
   return (<motion.section className="process"
					  ref={block}
					  variants={styleBox}
					  animate={control}
					  initial="initial">
		 <div className="container">
		    <div className="process__head">
			  <BlockTag text={getBlock[0].tag} />
			  <h2 className="page-title"
				 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />
		    </div>
		    
		    <div className="process__tabs">
			  {contentRender}
			  
			  <div className="process__nav">
				<ul className="process__nav_list">
				   {navRender}
				</ul>
				
				<LinearProgress className="process-progress"
							 variant="determinate" value={progress} />
			  </div>
		    </div>
		 </div>
	   </motion.section>);
};

export default memo(BlockProcess);
