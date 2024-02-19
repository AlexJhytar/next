import React from 'react';
import BlockTag from "../BlockTag/blockTag";
import './projectInformation.css';
import ProjectInformationItem from "./projectInformationItem";

const BlockProjectInformation = ({getBlock}) => {

	 const items = [];
	 for (let i = 0; i < getBlock[0].list.general_information_list; i++) {
			const list = 'general_information_list_' + i;
			const caption = list + '_general_information_list_tag';

			items.push({
				 caption: getBlock[0].list[caption]
			});
	 }

	 return (
			<section className="project-information">
				 <div className="container">
						<BlockTag text={getBlock[0].tag} />

						<div className="project-information_wrap">
							 <div className="project-information_block">
									<h2 className="page-title project-information_title"
											dangerouslySetInnerHTML={{__html: getBlock[0].title}} />

									<div className="project-information_text"
											 dangerouslySetInnerHTML={{__html: getBlock[0].text}} />
							 </div>

							 <div className="project-information_block">
									<h2 className="page-title project-information_title"
											dangerouslySetInnerHTML={{__html: getBlock[0].title_2}} />
									{
										 items.map((item, index) => {
												return (
													 <div className="project-item" key={index}>
															<div className="project-item_caption"
																	 dangerouslySetInnerHTML={{__html: item.caption}} />

															<div className="project-item_list">
																 <ProjectInformationItem getItems={getBlock[0].list}
																												 index={index} />
															</div>
													 </div>
												)
										 })
									}
							 </div>

						</div>
				 </div>
			</section>
	 );
};

export default BlockProjectInformation;