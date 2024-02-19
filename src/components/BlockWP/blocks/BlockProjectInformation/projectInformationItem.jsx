import React from 'react';

const ProjectInformationItem = ({getItems, index}) => {
	 const list = 'general_information_list_' + index + "_participants_list";

	 const itemInfo = [];
	 for (let j = 0; j < getItems[list]; j++) {
			const text = list + "_" + j + "_participants_text";

			itemInfo.push({
				 text: getItems[text]
			})
	 }

	 return (
			<>
				 {
						itemInfo.map((info, index) => {
							 return (
									<div className="project-item_text" key={index}>
										 {info.text}
									</div>
							 )
						})
				 }
			</>
	 )
};

export default ProjectInformationItem;