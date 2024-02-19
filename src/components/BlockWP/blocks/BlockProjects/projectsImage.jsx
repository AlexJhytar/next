import React from 'react';
import Picture from "../../../UI/Picture";

const ProjectsImage = ({getImage, count, index}) => {

	 const caseImage = [];
	 for (let j = 0; j < count; j++) {
			const img = 'projects_list_' + index + '_image_image_portfolio_list_' + j + '_image_image_data';
			const alt = 'projects_list_' + index + '_image_alt_projects';

			caseImage.push({
				 imgUrl: getImage[img].url_full,
				 imgUrlW: getImage[img].url_full_webp,
				 imgH: getImage[img].height,
				 imgW: getImage[img].width,
				 imgALT: getImage[alt]
			})
	 }

	 return (
			<>
				 {
						caseImage.map((item, index) => {
							 return (
							 	 <Picture key={index} src={item.imgUrl} srcWebp={item.imgUrlW} width={item.imgW} height={item.imgH}
													alt={item.imgALT + ` - project image ${index + 1}`}
								 />
							 )
						})
				 }

			</>
	 );
};

export default ProjectsImage;