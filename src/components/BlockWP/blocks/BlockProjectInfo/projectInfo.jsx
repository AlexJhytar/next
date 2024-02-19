"use client"

import React, {useRef} from 'react';
import BlockTag from "../BlockTag/blockTag";
import './project-info.css';
import {motion, useInView} from "framer-motion";

const BlockProjectInfo = ({getBlock, pageLoaded}) => {
	 const block = useRef();
	 const isVisible = useInView(block);

	 return (
			<>
				 <motion.section className={`project-info ${isVisible ? 'in-view' : ''}`} ref={block}>
						<div className="container">
							 <div className="project-info__wrap">

									<div className="project-info__content">
										 <BlockTag text={getBlock[0].projectTag} />
										 <h2 className="page-title"
												 dangerouslySetInnerHTML={{__html: getBlock[0].projectTitle}} />
										 <div className="project-text"
													dangerouslySetInnerHTML={{__html: getBlock[0].projectText}} />

										 <h3 className="project-name">
												{getBlock[0].projectName}
										 </h3>
										 <div className="project-desc">
												{getBlock[0].projectDescription}
										 </div>
									</div>

									<div className="project-info__image">
										 <img
												src={getBlock[0].projectsImageUrl}
												alt={getBlock[0].projectsImageAlt}
												width={getBlock[0].projectsImageW}
												height={getBlock[0].projectsImageH} />
									</div>

							 </div>
						</div>
				 </motion.section>

			</>
	 );
};

export default BlockProjectInfo;