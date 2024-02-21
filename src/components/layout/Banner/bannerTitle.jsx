import React from 'react';

const BannerTitle = (props) => {
	 const titleArray = props.title.split(' ');

	 let words = [];
	 for (let i = 0; i < titleArray.length; i++) {
			words[words.length] = titleArray[i].split('');
			words[words.length - 1].push(' ');
	 }

	 const letters = words.map((item, index) => {
			return (
				 <span className="title-word" key={index}>
						{
							 item.map((letter, index) => {
									return (
										 <span
												className={`title-letter`}
												key={index}>
												{letter}
				 						</span>
									)
							 })
						}
			</span>
			)
	 })

	 return (
			<h1 className={`banner__title`}>
				 {letters}
			</h1>
	 );
};

export default BannerTitle;