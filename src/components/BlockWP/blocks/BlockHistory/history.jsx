"use client"

import React, {useEffect, useState, memo} from 'react';
import './history.scss';
import BlockTag from "../BlockTag/blockTag";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation, Autoplay} from "swiper";

const BlockHistory = ({getBlock, pageLoaded}) => {
	 SwiperCore.use([Navigation, Pagination, Autoplay]);

	 let historyList = [];
	 for (let i = 0; i < getBlock[0].list.history_list; i++) {
			const list = 'history_list_' + i;
			const title = list + '_title';
			const text = list + '_text';
			const year = list + '_year';

			historyList.push({
				 title: getBlock[0].list[title],
				 text: getBlock[0].list[text],
				 year: getBlock[0].list[year],
			})
	 }

	 const [swiper, setSwiper] = useState(null);
	 const [value, setValue] = useState(0);

	 useEffect(() => {
			window.addEventListener('resize', ()=>{
				 if (value > 0) {
						swiper.slideTo(0);
				 }
			});
	 }, [value, swiper]);


	 const params = {
			spaceBetween: 15,
			slidesPerView: 1,
			speed: 700,
			className: "history-slider",
			navigation: true,
			pagination: {
				 type: "fraction",
			},
			allowTouchMove: false,
			watchSlidesProgress: true,
			updateOnWindowResize: true,
			breakpoints: {
				 0: {
						slidesPerView: 'auto',
						spaceBetween: 15,
						allowTouchMove: true,
				 },
				 1024: {
						slidesPerView: 1,
						spaceBetween: 0,
						allowTouchMove: false,
				 }
			}
	 }

	 const slide = historyList.map((item, index) => {
			return (
				 <SwiperSlide key={index}>
						<div className="history-date">
							 <span>{item.year}</span>
						</div>
						<div className="history-info">
							 <h3 className="history-info_title"
									 dangerouslySetInnerHTML={{__html: item.title}} />
							 <div className="history-info_text"
										dangerouslySetInnerHTML={{__html: item.text}} />
						</div>
				 </SwiperSlide>
			)
	 })

	 return (
			<section className="history">
				 <div className="container">
						<div className="history__wrap">
							 <BlockTag text={getBlock[0].tag} />
							 <h2 className="page-title"
									 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />

							 <Swiper onSwiper={setSwiper}
											 onSlideChange={(index) => setValue(index.realIndex)}
											 {...params}>
									{slide}
							 </Swiper>
						</div>
				 </div>
			</section>
	 );
};

export default memo(BlockHistory);