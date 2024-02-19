import React from 'react';

const BlockHeading = ({getBlock, pageLoaded}) => {
	 console.log(getBlock)
	 return (
			<div className="content-block">
				 <div className="container">
						<div dangerouslySetInnerHTML={{__html: getBlock[0].content}} />
				 </div>
			</div>
	 );
};

export default BlockHeading;