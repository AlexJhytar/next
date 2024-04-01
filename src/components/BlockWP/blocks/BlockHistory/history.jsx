import './history.scss';
import BlockTag from "../BlockTag/blockTag";
import HistorySlider from "@/components/BlockWP/blocks/BlockHistory/historySlider";

export default function blockHistory(getBlock) {

	 let historyList = [];
	 for (let i = 0; i < getBlock[0].list.history_list; i++) {
			const list = 'history_list_' + i;
			const title = list + '_title';
			const text = list + '_text';
			const year = list + '_year';

			historyList.push({
				 title: getBlock[0].list[title],
				 text: getBlock[0].list[text],
				 year: getBlock[0].list[year],
			})
	 }

	 return (
			<section className="history">
				 <div className="container">
						<div className="history__wrap">
							 <BlockTag text={getBlock[0].tag} />
							 <h2 className="page-title"
									 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />
							
							<HistorySlider list={historyList} />
						</div>
				 </div>
			</section>
	 );
}