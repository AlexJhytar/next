"use client"

import React, {useEffect} from 'react';
import './development.scss';
import Picture from "../../../UI/Picture";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const BlockDevelopment = ({getBlock}) => {
	 const blockList = [];
	 for (let i = 0; i < getBlock[0].list.offers_list; i++) {
			let list = 'offers_list_' + i;
			const imgAlt = list + '_image_alt_offer';
			const imgUrl = list + '_offer_image_data';
			const title = list + '_offer_title';
			const text = list + '_offer_description';

			blockList.push({
				 title: getBlock[0].list[title],
				 text: getBlock[0].list[text],
				 src: getBlock[0].list[imgUrl].url_full,
				 scrWebp: getBlock[0].list[imgUrl].url_full_webp,
				 imgW: getBlock[0].list[imgUrl].width,
				 imgH: getBlock[0].list[imgUrl].height,
				 imgAlt: getBlock[0].list[imgAlt]
			})
	 }

	 gsap.registerPlugin(ScrollTrigger);

	 useEffect(() => {
			let listItem = gsap.utils.toArray(".development-block");

			listItem.forEach((section, index) => {
				 ScrollTrigger.create({
						trigger: section,
						markers: false,
						start: 'top bottom',
						end: 'bottom top',
						toggleClass: "in-view"
				 });
			});
	 })

	 const block = blockList.map((item, index) => {
			return (
				 <div className="development-block" key={index}>
						<div className="development-block_info">
							 <h2 className="page-title development-block_info_title"
									 dangerouslySetInnerHTML={{__html: item.title}} />

							 <div className="development-block_info_text"
										dangerouslySetInnerHTML={{__html: item.text}} />
						</div>
						<div className="development-block_image">
							 <span /><span /><span /><span /><span /><span /><span />
							 <Picture src={item.src}
												srcWebp={item.scrWebp}
												alt={item.imgAlt}
												width={item.imgW}
												height={item.imgH} />
						</div>
				 </div>
			)
	 })

	 return (
			<section className="development">
				 <div className="container">
						<div className="development-wrap">
							 {block}
						</div>
				 </div>
			</section>
	 );
};

export default BlockDevelopment;