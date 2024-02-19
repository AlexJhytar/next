"use client"


import React, {useEffect, useState} from 'react';
import BlockTag from "../BlockTag/blockTag";
import './project-description.scss';

const BlockProjectDescription = ({getBlock, pageLoaded}) => {
	 const [matches, setMatches] = useState(
			window.matchMedia("(min-width: 768px)").matches
	 )

	 useEffect(() => {
			window
			.matchMedia("(min-width: 1024px)")
			.addEventListener('change', e => setMatches(e.matches));
	 })

	 let firstBlock = [], secondBlock = [], mobList = [], gallery = [];
	 let firstBlock_i = 0, secondBlock_i = 1;
	 for (let i = 0; i < getBlock[0].list.other_project_list; i++) {
			const list = 'other_project_list_' + i;
			const title = list + '_block_name';
			const text = list + '_text_description_other_projects';
			const imgALT = list + '_image_alt_description';
			const img = list + '_gallery_projects_image_data';

			gallery.push({
				 imgURL: getBlock[0].galleryList[img].url_full,
			})

			mobList.push({
				 list: i + 1,
				 title: getBlock[0].list[title] || '',
				 text: getBlock[0].list[text] || '',
				 altIMG: getBlock[0].list[imgALT] || '',
			})

			if (i === firstBlock_i) {
				 firstBlock.push({
						list: firstBlock_i + 1,
						title: getBlock[0].list[title] || '',
						text: getBlock[0].list[text] || '',
						altIMG: getBlock[0].list[imgALT] || '',
				 })
				 firstBlock_i += 2;
			}

			if (i === secondBlock_i) {
				 secondBlock.push({
						list: secondBlock_i + 1,
						title: getBlock[0].list[title] || '',
						text: getBlock[0].list[text] || '',
						altIMG: getBlock[0].list[imgALT] || '',
				 })
				 secondBlock_i += 2;
			}
	 }

	 return (
			<section className="project-description">
				 <div className="container">
						<BlockTag text={getBlock[0].projectTag} />
						<div className="project-description__head">
							 <h2 className="page-title"
									 dangerouslySetInnerHTML={{__html: getBlock[0].projectTitle}} />
							 {
									getBlock[0].projectText === '' ?
										 '' :
										 <>
												<div className="project-description__head-text"
														 dangerouslySetInnerHTML={{__html: getBlock[0].projectText}} />
										 </>
							 }
						</div>

						<div className="project-description__wrap">
							 {
									matches ?
										 <>
												<div className="project-description__list">
													 {firstBlock.map((item, index) => {
															return (
																 <div className="project-description__block" key={index}>
																		<div className="block_head">
																			 <div className="block_head-numb">
																					0{item.list}
																			 </div>
																			 <div className="block_head-title"
																						dangerouslySetInnerHTML={{__html: item.title}} />
																		</div>
																		<div className="block_content"
																				 dangerouslySetInnerHTML={{__html: item.text}}
																		/>
																		{
																			 gallery[parseInt(item.list - 1)].imgURL !== undefined ?
																					<>
																					<div className="block_image">
																						 <img src={gallery[parseInt(item.list - 1)].imgURL} alt="" />
																					</div>
																			 </> : ""
																		}
																 </div>
															)
													 })}
												</div>
												<div className="project-description__list">
													 {secondBlock.map((item, index) => {
															return (
																 <div className="project-description__block" key={index}>
																		<div className="block_head">
																			 <div className="block_head-numb">
																					0{item.list}
																			 </div>
																			 <div className="block_head-title"
																						dangerouslySetInnerHTML={{__html: item.title}} />
																		</div>
																		<div className="block_content"
																				 dangerouslySetInnerHTML={{__html: item.text}}
																		/>

																		{
																			 gallery[parseInt(item.list - 1)].imgURL !== undefined ? <>
																					<div className="block_image">
																						 <img src={gallery[parseInt(item.list - 1)].imgURL} alt="" />
																					</div>
																			 </> : ""
																		}
																 </div>
															)
													 })}
												</div>
										 </> :
										 <>
												<div className="project-description__list">
													 {mobList.map((item, index) => {
															return (
																 <div className="project-description__block" key={index}>
																		<div className="block_head">
																			 <div className="block_head-numb">
																					0{item.list}
																			 </div>
																			 <div className="block_head-title"
																						dangerouslySetInnerHTML={{__html: item.title}} />
																		</div>
																		<div className="block_content"
																				 dangerouslySetInnerHTML={{__html: item.text}}
																		/>

																		{
																			 gallery[parseInt(item.list - 1)].imgURL !== undefined ? <>
																					<div className="block_image">
																						 <img src={gallery[parseInt(item.list - 1)].imgURL} alt="" />
																					</div>
																			 </> : ""
																		}
																 </div>
															)
													 })}
												</div>
										 </>
							 }

						</div>

				 </div>
			</section>
	 );
};

export default BlockProjectDescription;