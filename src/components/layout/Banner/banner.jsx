import React, {useEffect, useState, memo} from 'react';
import './banner.css';
import BannerTitle from "./bannerTitle";
import BannerSubTitle from "./bannerSubTitle";
import {apiWP} from "../../../api";
import i18n from "../../../i18n";

const Banner = ({idEN, idUA}) => {
	 const lang = i18n.language;
	 const [blocks, setBlocks] = useState([]);
	 const [isPageLoaded, setIsPageLoaded] = useState(false);

	 let idPage;
	 if (lang === 'en') idPage = idEN;
	 if (lang === 'ua') idPage = idUA;

	 useEffect(() => {
			const getBlocks = async () => {
				 await apiWP.link(idPage)
				 .then((result) => {
						setBlocks(result.data.block_data);
						setIsPageLoaded(true);
				 });
			};
			getBlocks();
	 }, [lang, idPage]);

	 let block = [];
	 blocks.map((item) => {
			if (item.blockName === 'acf/blockbanner') {
				 block.push({
						title: item.attrs.data.title || '',
						subtitle: item.attrs.data.subtitle || '',
						key: item.attrs.data._title || '',
				 });
			}
			return true;
	 })

	 let blockBanner = block.map((item, key) => {
			return (
				 <div className="banner__wrap" key={key}>
						<BannerTitle title={item.title} />
						{
							 item.subtitle.length === 0 ? '' : <BannerSubTitle text={item.subtitle} />
						}
				 </div>
			)
	 })

	 return (
			<section className={`banner ${isPageLoaded ? 'loaded' : ''}`}>
				 <div className="container">
						{
							 blockBanner
						}
				 </div>
			</section>
	 );
};

export default memo(Banner);