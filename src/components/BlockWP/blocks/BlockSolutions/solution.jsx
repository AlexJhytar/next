import React from 'react';
import BlockTag from "../BlockTag/blockTag";
import './solutions.css';

const BlockSolution = ({getBlock}) => {

	 const block = [];
	 for (let i = 0; i < getBlock[0].list.solutions_information_list; i++) {
	 	 const index = 'solutions_information_list_' + i;
	 	 const text = index + '_solutions_information_list_text';

	 	 block.push({
				text: getBlock[0].list[text]
		 })
	 }

	 return (
			<section className="solutions">
				 <div className="container">
						<BlockTag text={getBlock[0].tag} />
						<h2 className="page-title"
								dangerouslySetInnerHTML={{__html: getBlock[0].title}} />

						<div className="solutions__wrap">
							 {
									block.map((item, index)=> {
										 return (
										 	 <div className="solutions__block" key={index}>
													<div className="solutions__block_numb">
														 0{index + 1}.
													</div>
													<div className="solutions__block_text"
													dangerouslySetInnerHTML={{__html: item.text}}/>
											 </div>
										 )
									})
							 }
						</div>
				 </div>
			</section>
	 );
};

export default BlockSolution;