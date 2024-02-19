"use client"

import React, {useState, memo} from 'react';
import BlockTag from "../BlockTag/blockTag";
import Spoiler from "../../../UI/Spoiler/spoiler";
import "./faq.css";

const BlockFaq = ({getBlock, pageLoaded}) => {
	 const [activeIndex, setActiveIndex] = useState(0);

	 const blockList = [];
	 for (let i = 0; i < getBlock[0].list.faq_list; i++) {
			let answer = 'faq_list_' + i + '_answer';
			let question = 'faq_list_' + i + '_question';

			blockList.push({
				 question: getBlock[0].list[question] || '',
				 answer: getBlock[0].list[answer] || ''
			})
	 }

	 const faqItems = blockList.map((info, index) => {
			const showTab = index === activeIndex ? "active" : "";

			return (
				 <Spoiler
						key={index}
						index={index}
						classes={showTab}
						onClick={() => {
							 setActiveIndex(index)
						}}
						title={info.question}
						content={info.answer}
				 />
			)
	 })

	 return (
			<section className={`faq`}>

				 <div className="container">
						<BlockTag text={getBlock[0].tag} />
						<h2 className="faq__title page-title"
								dangerouslySetInnerHTML={{__html: `${getBlock[0].title}`}}
						/>
						<div className="faq__wrap">
							 {faqItems}
						</div>
				 </div>
			</section>
	 );
}

export default memo(BlockFaq);