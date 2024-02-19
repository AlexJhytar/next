import React from 'react';
import './project-gallery.css';

const BlockProjectGallery = ({getBlock}) => {

	 let image = [];
	 for (let i = 0; i < getBlock[0].list.gallery_block_image_data.length; i++) {
			image.push({
				 src: getBlock[0].list[i + 1].url_full
			})
	 }

	 const DURATION = 300000;
	 const ROWS = 3;
	 const TAGS_PER_ROW = 25;

	 const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
	 const shuffle = (arr) => [...arr].sort(() => 1 - Math.random());

	 const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
			return (
				 <div className='project-gallery_loop'
							style={{
								 '--duration': `${duration}ms`,
								 '--direction': reverse ? 'reverse' : 'normal'
							}}>
						<div className='project-gallery_inner'>
							 {children}
							 {children}
							 {children}
							 {children}
						</div>
				 </div>
			);
	 };

	 const Img = ({src, index}) => (
			<div className='gallery-item' data-index={index}>
				 <img src={src} className="gallery-img" alt=""/>
			</div>
	 );

	 return (
			<>
				 <div className="project-gallery">
						<div className='project-gallery_list' id="light-gallery">
							 {[...new Array(ROWS)].map((_, i) => (
									<InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)}
																			reverse={i % 2}>

										 {shuffle(image).slice(0, TAGS_PER_ROW).map((item, index) => (
												<Img src={item.src} index={index} key={index} />
										 ))}
									</InfiniteLoopSlider>
							 ))}
						</div>
				 </div>

			</>
	 );
};

export default BlockProjectGallery;
