"use client"

import React, {useRef, memo} from 'react';
import Links from "../../../UI/Links";
import './quote.scss';
import {motion, useInView} from "framer-motion";

const BlockQuote = ({getBlock}) => {
	 const block = useRef();
	 const isVisible = useInView(block);

	 return (
			<motion.div data-theme="dark" ref={block}
									className={`block-quote ${isVisible ? 'in-view' : ''}`}>
				 <div className="container">
						<div className="block-quote__wrap">
							 <div className="block-quote__image">
										 <img src={getBlock[0].image} alt="" />
							 </div>
							 <div className="block-quote__content">
									<div className="author-name">
										 {getBlock[0].name}
									</div>
									<div className="author-position">
										 {getBlock[0].position}
									</div>
									<div className="author-quote">
										 {getBlock[0].text}
									</div>
									{
										 getBlock[0].link === '' ? '' :
												<div className="block-quote__content-link">
													 <Links url={`/${i18n.language}${getBlock[0].link}`} text={getBlock[0].linkText} />
												</div>
									}
							 </div>
						</div>
				 </div>
			</motion.div>
	 );
};

export default memo(BlockQuote);