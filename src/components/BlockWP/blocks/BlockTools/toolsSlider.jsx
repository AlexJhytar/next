import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Grid, Navigation, Pagination} from "swiper";
import LazyLoad from "react-lazyload";

const ToolsSlider = ({getInfo}) => {
	 SwiperCore.use([Navigation, Pagination, Autoplay, Grid]);

	 const params = {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 25,
			className: "tools-slider",
			pagination: {
				 type: "fraction",
			},
			updateOnWindowResize: true,
			grid: {
				 rows: 5,
				 fill: 'row',
			},
			loop: false,
			speed: 500,
			navigation: true,
			breakpoints: {
				 0: {
						slidesPerView: 1,
						spaceBetween: 12,
						autoplay: {
							 delay: 4000,
						},
						allowTouchMove: true,
						grid: {
							 rows: 5,
							 fill: 'row',
						},
				 },
				 640: {
						slidesPerView: "auto",
						spaceBetween: 0,
						allowTouchMove: false,
						grid: {
							 rows: 1,
							 fill: 'row',
						},
				 }
			}
	 }

	 const slide = getInfo.map((item, index) => {
			return (
				 <SwiperSlide key={index}>
						<div className="tools__block">
							 <div className="tools__block-icon">
									<LazyLoad>
										 <img src={item.iconURL} width={item.iconW} height={item.iconH}
													alt="tools" />
									</LazyLoad>
							 </div>
							 <div className="tools__block-name">
									{item.title}
							 </div>
						</div>
				 </SwiperSlide>
			)
	 })

	 return (
			<div className="tools__inner">
				 <Swiper {...params}>
						{slide}
				 </Swiper>
			</div>
	 );
};

export default ToolsSlider;