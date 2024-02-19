import React from 'react';

const ToolsInfinite = ({getTools}) => {
	 const DURATION = 200000;
	 const ROWS = 4;
	 const TAGS_PER_ROW = 25;

	 const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
	 const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

	 const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
			return (
				 <div className='tools-slider-loop'
							style={{
								 '--duration': `${duration}ms`,
								 '--direction': reverse ? 'reverse' : 'normal'
							}}>
						<div className='tools-slider__inner'>
							 {children}
						</div>
				 </div>
			);
	 };

	 const Tag = ({text, src}) => (
			<div className='tag'>
				 <img src={src} className="tag-icon" alt="tools" />
				 {text}
			</div>
	 );


	 return (
			<div className="tools__inner">
				 <div className='tools-list'>
						{[...new Array(ROWS)].map((_, i) => (
							 <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)}
																	 reverse={i % 2}>
									{shuffle(getTools).slice(0, TAGS_PER_ROW).map((tag, index) => (
										 <Tag text={tag.title} src={tag.iconURL} key={index} />
									))}
							 </InfiniteLoopSlider>
						))}
						<div className='fade' />
				 </div>
			</div>
	 );
};

export default ToolsInfinite;