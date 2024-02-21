import React, {useRef, useState, memo} from 'react';
import './art-slider.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation, Autoplay} from "swiper";
import 'swiper/swiper-bundle.css';
import Picture from "../../UI/Picture";
import {Link} from "react-router-dom";
import i18n from "../../../i18n";
import {motion, useInView} from "framer-motion";
import LazyLoad from "react-lazyload";

const ArtSlider = ({getInfo}) => {
	 SwiperCore.use([Navigation, Pagination, Autoplay]);
	 const progressCircle = useRef(null);
	 const [state, setState] = useState(false);
	 const block = useRef();
	 const isVisible = useInView(block);
	 const lang = i18n.language;

	 const onAutoplayTimeLeft = (s, time, progress) => {
			progressCircle.current.style.setProperty('--progress', 1 - progress);
	 };

	 const [swiperRef, setSwiperRef] = useState(null);
	 const play = () => {
			swiperRef.autoplay.start();
			swiperRef.params.autoplay.delay = 3000;
			swiperRef.params.autoplay.disableOnInteraction = false;

			swiperRef.on('slideChange', function () {
				 document.querySelector('.autoplay-progress svg').style.opacity = '1'
			})
	 };

	 if (isVisible === true && state === false) {
			setState(true);
			play();
	 }

	 const params = {
			spaceBetween: 25,
			slidesPerView: 5,
			loop: true,
			speed: 700,
			initialSlide: 0,
			className: "art-slider",
			navigation: true,
			allowTouchMove: false,
			watchSlidesProgress: true,
			updateOnWindowResize: true,
			breakpoints: {
				 0: {
						slidesPerView: 1,
						spaceBetween: 15,
						allowTouchMove: true,
				 },
				 560: {
						slidesPerView: 2,
						spaceBetween: 15,
						allowTouchMove: true,
				 },
				 640: {
						slidesPerView: 3,
						spaceBetween: 15,
						allowTouchMove: true,
				 },
				 768: {
						slidesPerView: 4,
						spaceBetween: 15,
						allowTouchMove: true,
				 },
				 1024: {
						slidesPerView: 4,
						spaceBetween: 15,
						allowTouchMove: false,
				 },
				 1200: {
						slidesPerView: 5,
						spaceBetween: 20,
						allowTouchMove: false,
				 },
				 1440: {
						slidesPerView: 5,
						spaceBetween: 25,
						allowTouchMove: false,
				 },
			}
	 }

	 const slide = getInfo.map((item, index) => {
				 return (
						<SwiperSlide key={index}>
							 {
									item.link === '' ?
										 <>
												<div className="member-card only-slide">
													 <div className="member-img">
															<LazyLoad>
																 <Picture
																		fallback={item.imgURL}
																		src={item.imgURL}
																		alt={item.imgALT}
																		width={item.imgW}
																		height={item.imgH}
																 />
															</LazyLoad>
													 </div>
													 <div className="member-info">
															<div className="member-name">
																 {item.name}
															</div>
															<div className="member-position">
																 {item.position}
															</div>
													 </div>
												</div>
										 </> :
										 <>
												<Link relative="path" to={`/${lang}/portfolio${item.link}`}
															className="member-card">
													 <div className="member-img">
															<LazyLoad>
																 <Picture
																		fallback={item.imgURL}
																		src={item.imgURL}
																		srcWebp={item.imgURLWebp}
																		alt={item.imgALT}
																		width={item.imgW}
																		height={item.imgH}
																 />
															</LazyLoad>
													 </div>
													 <div className="member-info">
															<div className="member-name">
																 {item.name}
															</div>
															<div className="member-position">
																 {item.position}
															</div>
													 </div>
												</Link>
										 </>
							 }

						</SwiperSlide>
				 )
			}
	 )

	 return (
			<motion.div style={{width: '100%'}} ref={block}>
				 <Swiper {...params}
								 onSwiper={setSwiperRef}
								 onAutoplayTimeLeft={onAutoplayTimeLeft}>
						{slide}
						{slide}
						<div className="autoplay-progress" slot="container-end">
							 <svg viewBox="0 0 48 48" style={{opacity: '0'}} ref={progressCircle}>
									<circle cx="24" cy="24" r="20" />
							 </svg>
						</div>
				 </Swiper>
			</motion.div>
	 );
};

export default memo(ArtSlider);