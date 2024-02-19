import React from 'react';

const ProjectsItems = ({items, index}) => {
	 let tagNumber, tagText;
	 const list = 'projects_list_' + index + "_tags_list";

	 const caseInfo = [];
	 for (let j = 0; j < items[list]; j++) {
			tagNumber = list + "_" + j + "_number";
			tagText = list + "_" + j + "_text";

			caseInfo.push({
				 numb: items[tagNumber],
				 text: items[tagText]
			})
	 }

	 return (
			<div className="block-portfolio-case__items">
				 {
						caseInfo.map((item, i) => {
							 return (
									<div className="case-item" key={i}>
										 <div className="case-item_numb">{item.numb}</div>
										 <div className="case-item_text">
												{item.text}
										 </div>
									</div>
							 )
						})
				 }
			</div>
	 );
};

export default ProjectsItems;