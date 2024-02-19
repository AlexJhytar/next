import React, { memo } from 'react';
import './projects.scss';
import BlockTag from "../BlockTag/blockTag";
import ProjectsCase from "./projectsCase";

const BlockProjects = ({getBlock, pageLoaded}) => {
   
   return (<section className="block-portfolio" id="block-portfolio">
		 
		 <div className="container">
		    <BlockTag text={getBlock[0].tag} />
		    <h2 className="block-portfolio_title page-title"
			   dangerouslySetInnerHTML={{__html: getBlock[0].title}} />
		 </div>
		 
		 <ProjectsCase template={getBlock[0].list} />
	   
	   </section>);
};

export default memo(BlockProjects);
