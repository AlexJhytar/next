import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerMainWords = ({getWord}) => {
	 console.log(getWord)
	 const params = {
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			className: 'words-slider',
			variableWidth: true,
			autoplay: false,
			speed: 1500,
			draggable: false,
			cssEase: "ease",
			autoplaySpeed: 4000,
			beforeChange: (nextIndex) => {
				 let index = document.querySelector('.words-slider .slick-slide').dataset.index;
				 if (nextIndex === (Math.abs(index) - 1)) {
						document.querySelector(`.words-slider .slick-slide[data-index="${Math.abs(index)}"]`).dataset.slide = 'active';
						setTimeout(() => {
							 document.querySelector(`.words-slider .slick-slide[data-index="${Math.abs(index)}"]`).removeAttribute('data-slide');
						}, 4000);
				 }
			},
			arrows: false,
			responsive: [
				 {
						breakpoint: 1024,
						settings: {
							 slidesToShow: 1,
							 slidesToScroll: 1,
							 centerMode: true,
							 variableWidth: true,
							 draggable: false,
						}
				 }
			]
	 }

	 let wordArr = [];
	 for (let i = 0; i < getWord.list.title_inner_list; i++) {
			let index = 'title_inner_list_' + i;
			let word = index + '_text_inner';
			wordArr.push({
				 word: getWord.list[word]
			});
	 }

	 return (
			<>
				 <Slider {...params}>
						{wordArr.map((item, index) => {
							 return (
									<div key={index} data-text={item.word} className="slick-slide_text">
										 {item.word}
									</div>
							 )
						})}
				 </Slider>
			</>
	 )
};

export default BannerMainWords;
