"use client"

import React, {useRef} from 'react';
import BlockTag from "../BlockTag/blockTag";
import './blockResult.scss';
import {motion, useInView} from "framer-motion";

const BlockResult = ({getBlock, pageLoaded}) => {
	 const block = useRef();
	 const isVisible = useInView(block);

	 let resultBlock = [];
	 for (let i = 1; i < 5; i++) {
			let resultText = 'resultText_' + i;
			let resultNumb = 'resultNumb_' + i;

			resultBlock.push({
				 numb: getBlock[0][resultNumb] || '',
				 text: getBlock[0][resultText] || '',
			})
	 }

	 return (
			<motion.section ref={block} className={`block-result ${isVisible ? 'in-view' : ''}`}>
				 <div className="container">
						<BlockTag text={getBlock[0].tag} />
						<div className="block-result__head">
							 <h2 className="page-title"
									 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />
							 {
									getBlock[0].text === '' ?
										 '' :
										 <>
												<div className="block-result__head-text"
														 dangerouslySetInnerHTML={{__html: getBlock[0].text}} />
										 </>
							 }
						</div>

						<div className="block-result__wrap">

							 <div className="block-result__items">
									{
										 resultBlock.map((item, index) => {
												return (
													 <div className={`result-item item-${index + 1} ${item.numb === '' && item.text === '' ? "hidden" : ""}`}
																key={index}>
															<div className="result-numb">{item.numb}</div>
															<div className="result-text"
																	 dangerouslySetInnerHTML={{__html: item.text}} />
													 </div>
												)
										 })
									}
							 </div>

							 <div className="block-result__image">
									<img src={getBlock[0].imgURL} alt={getBlock[0].imgALT}
											 width={getBlock[0].imgW} height={getBlock[0].imgH} />
							 </div>
						</div>
				 </div>
			</motion.section>
	 );
};

export default BlockResult;