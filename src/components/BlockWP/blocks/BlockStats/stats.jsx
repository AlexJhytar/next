"use client"

import React, {useRef} from 'react';
import './stats.scss'
import {motion, useInView} from "framer-motion";

const BlockStats = ({getBlock, pageLoaded}) => {
	 const block = useRef();
	 const isVisible = useInView(block);

	 let getList = [];
	 for (let i = 0; i < getBlock[0].list.stats_list; i++) {
			const list = 'stats_list_' + i;
			const text = list + '_text';
			const title = list + '_title';

			getList.push({
				 title: getBlock[0].list[title],
				 text: getBlock[0].list[text]
			})
	 }

	 return (
			<motion.section ref={block} className={`block-stats ${isVisible ? 'in-view' : ''}`}>
				 <div className="container">
						<div className="block-stats__wrap">
							 {
									getList.map((block, index) => {
										 return (
												<div className="block-stats__item" key={index}>
													 <div className="item-caption"
																dangerouslySetInnerHTML={{__html: block.title}} />
													 <div className="item-text"
																dangerouslySetInnerHTML={{__html: block.text}} />
												</div>
										 )
									})
							 }
						</div>
				 </div>
			</motion.section>
	 );
};

export default BlockStats;