import './block-tag.scss';

const BlockTag = (props) => {
	 return (
			<div className="block-tag">
				 {`<  ${props.text}  >`}
			</div>
	 );
};

export default BlockTag;