import React from 'react';

const FooterPhone = ({getList}) => {

	 let phoneList = [];
	 for (let i = 0; i < getList.length; i++) {
			phoneList.push({
				 phone: getList[i].phone_number || ''
			})
	 }

	 return (
			<>
				 {
						phoneList.map((item, index) => {
							 return (
									<div className="footer__block-phone" key={index}>
										 <a href={`tel:${item.phone}`}>{item.phone}</a>
									</div>
							 )
						})
				 }
			</>
	 );
};

export default FooterPhone;