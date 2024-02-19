import React from 'react';

const ProcessContent = ({item, index, state}) => {

	 return (
			<div className={`process__content ${state}`}
					 data-controls={index + 1} >
				 <div className="process__content_caption">
						{item.caption}
				 </div>
				 <div className="process__content_text">
						{item.text}
				 </div>
			</div>
	 );
};

export default ProcessContent;