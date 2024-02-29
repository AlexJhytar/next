export default function Picture ({src, srcWebp, alt, ...delegated}) {
	 return (
			<picture>
				 <source srcSet={srcWebp} type="image/webp" />
				 <source srcSet={src} type="image/jpeg" />
				 <img src={src} alt={alt} {...delegated} />
			</picture>
	 );
};