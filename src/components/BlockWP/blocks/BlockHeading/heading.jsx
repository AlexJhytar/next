export default function blockHeading(getBlock) {
	 return (
			<div className="content-block">
				 <div className="container">
						<div dangerouslySetInnerHTML={{__html: getBlock[0].content}} />
				 </div>
			</div>
	 );
}