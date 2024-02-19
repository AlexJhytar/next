"use client"

import React, {useState, memo} from 'react';
import BlockTag from "../BlockTag/blockTag";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Autoplay, Navigation} from "swiper";
import './advantages.scss';
import 'swiper/swiper-bundle.css';

const BlockAdvantages = ({getBlock, pageLoaded}) => {
	 SwiperCore.use([Navigation, Pagination, Autoplay]);
	 const getList = [];
	 for (let i = 0; i < getBlock[0].list.advantages_list; i++) {
			const list = 'advantages_list_' + i;
			const text = list + '_text';
			const title = list + '_title';

			getList.push({
				 title: getBlock[0].list[title],
				 text: getBlock[0].list[text]
			})
	 }

	 const [swiperRef, setSwiperRef] = useState(null);

	 const play = () => {
			swiperRef.autoplay.start();
	 };
	 const pause = () => {
			swiperRef.autoplay.stop();
	 };

	 const params = {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
			autoplay: {
				 delay: 4000,
				 disableOnInteraction: false,
			},
			pagination: {
				 type: "fraction",
			},
			speed: 1400,
			loop: false,
			navigation: true,
			updateOnWindowResize: true,
			className: "advantages-slider",
			grabCursor: true,
			breakpoints: {
				 0: {
						slidesPerView: 'auto',
						spaceBetween: 15,
						slidesPerGroup: 1,
						speed: 700,
				 },
				 1024: {
						slidesPerView: 'auto',
						spaceBetween: 20,
						speed: 1000,
				 }
			}
	 }

	 const slide = getList.map((item, index) => {

			return (
				 <SwiperSlide key={index}>
						<div className="advantages-card">
							 <h3 className="advantages-card_title">
									{item.title}
							 </h3>
							 <div className="advantages-card_text">
									{item.text}
							 </div>
						</div>
				 </SwiperSlide>
			)
	 })

	 return (
			<section data-theme="dark" className="advantages">
				 <div className="container">
						<BlockTag text={getBlock[0].tag} />
						<div className="advantages__head">
							 <h2 className="page-title"
									 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />
							 <div className="advantages__head-text">
									{getBlock[0].text}
							 </div>
						</div>
				 </div>

				 <div className="advantages__content">
						<div className="container">
							 <div
									onMouseEnter={() => pause()}
									onMouseLeave={() => play()}
							 >
									<Swiper {...params} onSwiper={setSwiperRef}>
										 {slide}
									</Swiper>
							 </div>
						</div>
				 </div>
			</section>
	 );
};

export default memo(BlockAdvantages);