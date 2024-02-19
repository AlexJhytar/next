import React, {memo} from 'react';
import BlockTag from "../BlockTag/blockTag";
import SwiperCore, {Autoplay, Grid, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import './testimonials.scss';
import TestimonialsSocial from "./testimonialsSocial";

const BlockTestimonials = ({getBlock, pageLoaded}) => {
	 SwiperCore.use([Navigation, Pagination, Autoplay, Grid]);

	 const params = {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 25,
			speed: 700,
			autoHeight: false,
			loop: true,
			className: "testimonials-slider",
			centeredSlides: true,
			navigation: true,
			pagination: {
				 type: "fraction",
			},
			grabCursor: true,
			autoplay: {
				 delay: 4000,
				 disableOnInteraction: false,
			},
			watchSlidesProgress: true,
			updateOnWindowResize: true,
			breakpoints: {
				 0: {
						slidesPerView: 'auto',
						spaceBetween: 30,
				 },
				 640: {
						slidesPerView: 'auto',
						spaceBetween: 15,
				 },
				 1024: {
						slidesPerView: 'auto',
						spaceBetween: 24,
				 }
			}
	 }

	 const getList = [];
	 if (getBlock[0].list.testimonials_list !== null) {
			for (let i = 0; i < getBlock[0].list.testimonials_list; i++) {
				 const list = 'testimonials_list_' + i;
				 const name = list + '_name';
				 const position = list + '_position';
				 const image = list + '_image_image_data';
				 const rate = list + '_rate_image_data';
				 const text = list + '_text';
				 const link = list + '_link';
				 const linkText = list + '_text_link';
				 const imgALT = list + '_image_alt_testimonials';

				 getList.push({
						name: getBlock[0].list[name] || '',
						position: getBlock[0].list[position] || '',
						img: getBlock[0].list[image] || '',
						imgH: getBlock[0].list[image].height || '',
						imgW: getBlock[0].list[image].weight || '',
						imgURL: getBlock[0].list[image].url_full || '',
						rateURL: getBlock[0].list[rate].url_full || '',
						rateW: getBlock[0].list[rate].height || '',
						rateH: getBlock[0].list[rate].weight || '',
						text: getBlock[0].list[text] || '',
						linkURL: getBlock[0].list[link] || '',
						linkText: getBlock[0].list[linkText] || '',
						imgALT: getBlock[0].list[imgALT] || ''
				 })
			}
	 }

	 const slide = getList.map((item, index) => {
			return (
				 <SwiperSlide key={index}>
						<div className="testimonials-card">
							 <div className="testimonials-card__head">
									<div className="human-image">
										 <LazyLoad>
												<img src={item.imgURL}
														 width={item.imgW}
														 height={item.imgH}
														 alt={item.imgALT} />
										 </LazyLoad>
									</div>
									<div className="human-info">
										 <div className="human-info_name">
												{item.name}
										 </div>
										 <div className="human-info_pos">
												{item.position}
										 </div>
										 <div className="human-info_rate">
													 <img src={item.rateURL}
																height={item.rateH}
																width={item.rateW}
																alt="rating in stars" />
										 </div>
									</div>
									{item.title}
							 </div>
							 <div className="testimonials-card__text">
									{item.text}
							 </div>
							 <a className="testimonials-card__link" rel="nofollow noreferrer" target="_blank"
									href={item.linkURL}>{item.linkText}</a>
						</div>
				 </SwiperSlide>
			)
	 })

	 const socialList = () => {
			const social = [];
			if (getBlock[0].list.social_network_testimonials_list !== null) {
				 for (let i = 0; i < getBlock[0].list.social_network_testimonials_list; i++) {
						let list = 'social_network_testimonials_list_' + i;
						let url = list + '_link_testimonials_to_social_network';
						let icon = list + '_icon_testimonials_social_network_image_data';

						social.push({
							 url: getBlock[0].list[url] || '',
							 icon: getBlock[0].list[icon].url_full || '',
							 iconW: getBlock[0].list[icon].width || '',
							 iconH: getBlock[0].list[icon].height || '',
						})
				 }

				 return social;
			}
	 }

	 return (
			<section data-theme="dark" className="testimonials">
				 <div className="container">
						<div className="testimonials__wrap">
							 <div className="testimonials__info">
									<div className="testimonials__info-wrap">
										 <BlockTag text={getBlock[0].tag} />
										 <h2 className="testimonials__info-title page-title"
												 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />
										 <div className="testimonials__info-text">
												{getBlock[0].text}
										 </div>
									</div>

									<div className="testimonials__info-social">
										 <div className="social-caption"
													dangerouslySetInnerHTML={{__html: getBlock[0].socialCaption}} />
										 <div className="social-buttons">

												<TestimonialsSocial getLink={socialList()} />

										 </div>
									</div>
							 </div>

							 <div className="testimonials__content">
										 <Swiper {...params}>
												{slide}
										 </Swiper>
							 </div>
						</div>
				 </div>
			</section>
	 );
};

export default memo(BlockTestimonials);