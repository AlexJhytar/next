const TestimonialsSocial = ({getLink}) => {

	 return getLink.map((item, index) => {
			return (
				 <a target="_blank" rel="nofollow noreferrer" href={item.url} key={index}>
						<img src={item.icon}
								 width={item.iconW}
								 height={item.iconH}
								 alt="social icon" />
				 </a>
			)
	 })
}

export default TestimonialsSocial;