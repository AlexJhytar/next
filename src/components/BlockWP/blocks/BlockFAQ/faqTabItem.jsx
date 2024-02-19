import React from 'react';

const FaqTabItem = ({title, state, onClick, index, content}) => {

	 return (
			<div className={`faq__tabs ${state}`}>
				 <div className="faq__tabs-title"
							aria-controls={index + 1}
							onClick={onClick}
				 >
						{title}
				 </div>
				 <div className="faq__tabs-content">
						<div className="faq__tabs-content-text">
							 {content}
						</div>
				 </div>
			</div>
	 );
};

export default FaqTabItem;