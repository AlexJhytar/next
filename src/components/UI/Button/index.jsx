import React from 'react';
import Image from 'next/image';

const Button = (props) => {
	 return (
			// props:
			// type="submit || button"
			// class="default || mixed"
			// color="green || black || white"
			// disabled="disabled"
			// title=""
			// onClick="name of function"
			<>
				 <button type={props.type}
								 disabled={props.disabled === 'true' ? "disabled" : ''}
								 onClick={props.onClick}
								 className={`button button-` + props.class + ` button-` + props.color}>
						<span dangerouslySetInnerHTML={{__html: props.title}} />
						{props.icon !== undefined && props.icon !== '' ?
							<Image
								src={props.icon}
								alt="My SVG"
							/> : ''}
				 </button>
			</>
	 );
};

export default Button;