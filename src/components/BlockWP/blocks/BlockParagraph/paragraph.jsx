import React from 'react';

const BlockParagraph = ({getBlock, pageLoaded}) => {
	 return (
			<div className="content-block">
				 <div className="container">
						<div dangerouslySetInnerHTML={{__html: getBlock[0].content}} />
				 </div>
			</div>
	 );
};

export default BlockParagraph;