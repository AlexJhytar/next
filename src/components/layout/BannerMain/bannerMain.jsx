import React, {memo, useEffect, useState} from 'react';
import './banner-main.css';

import i18n from "../../../i18n";
import {apiWP} from "../../../api";
import BannerMainWords from "./bannerMainWords";
import BannerMainClients from "./bannerMainClients";

const BannerMain = ({idEN, idUA}) => {
	 const lang = i18n.language;
	 const [blocks, setBlocks] = useState([]);
	 const [isPageLoaded, setIsPageLoaded] = useState(false);
	 let blockBanner = [];

	 let idPage;
	 if (lang === 'en') idPage = idEN;
	 if (lang === 'ua') idPage = idUA;

	 useEffect(() => {
			const getBlocks = async () => {
				 apiWP.link(idPage)
				 .then((result) => {
						setBlocks(result.data.block_data);
				 }).finally(() => {
						setIsPageLoaded(true);
				 });
			};
			getBlocks();
	 }, [lang, idPage]);

	 blocks.map((item) => {
			if (item.blockName === 'acf/blockinner') {
				 blockBanner.push({
						title_1: item.attrs.data.title_inner_1 || '',
						title_2: item.attrs.data.title_inner_2 || '',
						subtitle: item.attrs.data.text_description_inner || '',
						list: item.list
				 });
			}

			return true;
	 })

	 const bannerContent = blockBanner.map((item, index) => {
			return (
				 <div className="main-banner__wrap" key={index}>
						<div className="main-banner__content">
							 <div className="ellipse one"><span /></div>
							 <div className="ellipse two"><span /></div>
							 <div className="container">
									<div className="main-banner__title">

										 <h1>
												<span dangerouslySetInnerHTML={{__html: item.title_1}} />
												<span dangerouslySetInnerHTML={{__html: item.title_2}} />
										 </h1>

										 <BannerMainWords getWord={item} />

									</div>

									<div className="main-banner__subtitle">
										 <span dangerouslySetInnerHTML={{__html: item.subtitle}} />
									</div>
							 </div>
						</div>


						<BannerMainClients getList={item} />
				 </div>
			)
	 });

	 return (
			<section className={`main-banner ${isPageLoaded ? 'true' : ''}`}>
				 {bannerContent}
			</section>
	 );
};

export default memo(BannerMain);
