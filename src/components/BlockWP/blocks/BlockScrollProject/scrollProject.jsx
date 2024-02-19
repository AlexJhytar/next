"use client"

import React, {useState} from 'react';
import BlockTag from "../BlockTag/blockTag";
import './scrollProject.scss';

const BlockScrollProject = ({getBlock, pageLoaded}) => {
	 const [projectSize, setProjectSize] = useState(0);

	 let scrollProjectList = [];
	 let scrollProjectNav = [];
	 for (let i = 0; i < getBlock[0].list.favourite_project_list; i++) {
			const list = 'favourite_project_list_' + i;
			const blockSize = list + '_block_name';
			const img = list + '_favourite_projects_image_data';
			const imgALT = list + '_image_alt_favourite';

			scrollProjectList.push({
				 imgURL: getBlock[0].list[img].url_full,
				 imgW: getBlock[0].list[img].width,
				 imgH: getBlock[0].list[img].height,
				 imgALT: getBlock[0].list[imgALT],
			});

			scrollProjectNav.push({
				 blockSize: getBlock[0].list[blockSize]
			})
	 }

	 return (
			<section className="scroll-project">
				 <div className="container">
						<BlockTag text={getBlock[0].tag} />

						<div className="scroll-project__head">
							 <h2 className="page-title"
									 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />

							 <ul className="project-nav">
									{
										 scrollProjectNav.map((item, index) => {
										 	 let activeSlide = projectSize === index ? 'active' : '';

												return (
													 <li key={index} className={activeSlide} onClick={()=> {
															setProjectSize(index);
													 }}>
															{item.blockSize}
													 </li>
												)
										 })
									}
							 </ul>
						</div>

						<div className="scroll-project__wrap">
							 {
									scrollProjectList.map((item, index) => {
										 let activeSlide = projectSize === index ? 'active' : '';

										 return (
												<div key={index} className={`scroll-project-image breakpoint-${index+1} ${activeSlide}`}>
													 <div className="scroll-project-image_wrap">
															<img src={item.imgURL}
																	 alt={item.imgALT}
																	 width={item.imgW}
																	 height={item.imgH}
															/>
													 </div>
												</div>
										 )
									})
							 }
						</div>
				 </div>
			</section>
	 );
};

export default BlockScrollProject;