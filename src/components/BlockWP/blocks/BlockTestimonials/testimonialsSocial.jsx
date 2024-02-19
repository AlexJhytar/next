import React from 'react';

const TestimonialsSocial = ({getLink}) => {

	 const Links = getLink.map((item, index) => {
			return (
				 <a target="_blank" rel="nofollow noreferrer" href={item.url} key={index}>
						<img src={item.icon}
								 width={item.iconW}
								 height={item.iconH}
								 alt="social icon" />
				 </a>
			)
	 })

	 return (
			<>
				 {Links}
			</>
	 )
}

export default TestimonialsSocial;