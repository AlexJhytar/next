import React, {memo} from 'react';
import BlockTag from "../BlockTag/blockTag";
import "./tools.scss";
// import ToolsSlider from "./toolsSlider";
import ToolsInfinite from "./toolsInfinite";

const BlockTools = ({getBlock, pageLoaded}) => {

	 let listTools = [];
	 for (let i = 0; i < getBlock[0].list.tools_list; i++) {
			const list = 'tools_list_' + i;
			const icon = list + '_image_image_data';
			const title = list + '_title';

			listTools.push({
				 iconURL: getBlock[0].list[icon].url_full,
				 iconH: getBlock[0].list[icon].height,
				 iconW: getBlock[0].list[icon].weight,
				 title: getBlock[0].list[title]
			})
	 }

	 return (
			<section data-theme={'dark'} className="tools">
				 <div className="container">

						<div className="tools__wrap">
							 <BlockTag text={getBlock[0].tag} />
							 <h2 className="tools__title page-title"
									 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />
							 <div className="tools__subtitle">
									{getBlock[0].text}
							 </div>

							 {/*<ToolsSlider getInfo={listTools} />*/}

						</div>
				 </div>

				 <ToolsInfinite getTools={listTools} />
			</section>
	 );
};

export default memo(BlockTools);