import React from 'react';
import { motion } from "framer-motion";

const ProcessNav = ({index, item, onClick, state}) => {
   const styleChildren = {
	 initial: {
	    x: "20%",
	 }, action: {
	    opacity: 1, x: 0, transition: {
		  duration: .1,
	    }
	 },
   }
   
   return (<motion.li className={`process__nav_item ${state}`}
				  data-controls={index + 1}
				  variants={styleChildren}
				  onClick={onClick}>
		 <div className="item-icon">
			  <img src={item.url} width={item.width} height={item.height}
				  alt="icon process of artilab" />
		 </div>
		 <div className="item-title"
			 dangerouslySetInnerHTML={{__html: `${item.title}`}} />
	   </motion.li>);
};

export default ProcessNav;
