import React from 'react';

const FooterMail = ({getList}) => {

	 let mailList = [];
	 for (let i = 0; i < getList.length; i++) {
			mailList.push({
				 mail: getList[i].mail || ''
			})
	 }

	 return (
			<>
				 {
						mailList.map((item, index) => {
							 return (
									<div className="footer__block-mail" key={index}>
										 <a href={`mailto:${item.mail}`}>{item.mail}</a>
									</div>
							 )
						})
				 }
			</>
	 );
};

export default FooterMail;