"use client"

import React, {useRef, memo, useEffect} from 'react';
import Button from "../../../UI/Button";

import "./creation.scss"
import BlockTag from "../BlockTag/blockTag";
import Picture from "../../../UI/Picture";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const BlockCreation = ({getBlock, pageLoaded}) => {
	 const block = useRef();

	 const scroll = () => {
			const section = document.querySelector('#block-contact');
			section.scrollIntoView({block: 'center', inline: "center"});
	 };

	 gsap.registerPlugin(ScrollTrigger);
	 useEffect(() => {
			ScrollTrigger.create({
				 trigger: document.querySelector('.creation'),
				 markers: false,
				 start: 'top bottom',
				 end: 'bottom top',
				 toggleClass: "in-view"
			});

	 })

	 useEffect(() => {
			let listItem = gsap.utils.toArray(".creation");

			listItem.forEach((section, index) => {
				 gsap.fromTo(
						section,
						{
							 y: 0
						},
						{
							 y: -50,
							 duration: 1,
							 ease: "none",
							 scrollTrigger: {
									trigger: section,
									start: "top top",
									end: "bottom top",
									scrub: true
							 }
						}
				 );
			});
	 })

	 const creationWrap = getBlock.map((item, index) => {
			return (
				 <div className="creation__wrap" key={index}>
						<div className="creation__content">
							 <BlockTag text={item.tag} />
							 <h2 className="creation__content-title page-title"
									 dangerouslySetInnerHTML={{__html: item.title}} />
							 <p className="creation__content-text">
									{item.text}
							 </p>

							 <div className="creation__content-buttons">
									<Button
										 type="button"
										 class="mixed"
										 color="green"
										 title={item.textButton}
										 onClick={scroll}
										 icon="icon-arrow" />

									<div className="user-info">
										 {item.info}
									</div>
							 </div>

						</div>
						<div className="creation__image">
							 <div className="image-wrap">
									<Picture
										 fallback={item.imgURL}
										 src={item.imgURL}
										 srcWebp={item.imgURL}
										 alt={item.imgALT}
										 width={item.imgWidth}
										 height={item.imgHeight}
									/>
							 </div>
						</div>
				 </div>
			)
	 })

	 return (
			<section data-theme="dark" className={`creation`} ref={block}>
				 <div className="container">
						{creationWrap}
				 </div>
			</section>
	 );
};

export default memo(BlockCreation);