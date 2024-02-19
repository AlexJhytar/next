import React from 'react';

const ContactSocial = ({getSocial}) => {
	 const socialList = getSocial.map((item, index) => {
			return (
				 <a href={item.url} target="_blank" rel="nofollow noreferrer" key={index}>
						<img src={item.icon}
								 width={item.iconW}
								 height={item.iconH}
								 alt="social icon" />
				 </a>
			)
	 })

	 return (
			<>
				 {socialList}
			</>
	 );
};

export default ContactSocial;