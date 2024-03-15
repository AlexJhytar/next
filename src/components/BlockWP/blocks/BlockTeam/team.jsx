import './team.scss'
import BlockTag from "../BlockTag/blockTag";
import ArtSlider from "@/components/layout/ArtSlider/slider";

export default function blockTeam(getBlock) {

	 const blockItems = () => {
			const images = [];
			for (let i = 0; i < getBlock[0].list.team_list; i++) {
				 const list = 'team_list_' + i;
				 const name = list + '_name';
				 const position = list + '_position';
				 const img = list + '_image_image_data';
				 const imgALT = list + '_image_alt_team';
				 const link = list + '_team_text_link' || '';

				 images.push({
						name: getBlock[0].list[name],
						position: getBlock[0].list[position],
						imgURL: getBlock[0].list[img].url_full,
						imgURLWebp: getBlock[0].list[img].url_full_webp,
						imgW: getBlock[0].list[img].width,
						imgH: getBlock[0].list[img].height,
						imgALT: getBlock[0].list[imgALT],
						link: getBlock[0].list[link]
				 })
			}
			return images;
	 }


	 return (
			<section className={`team ${getBlock[0].style === 'style-2' ? 'style-2' : ''}`}>
				 <div className="container">
						<BlockTag text={getBlock[0].tag} />
						<div className="team__head">
							 <div className="team__head-title">
									<h2 className="page-title"
											dangerouslySetInnerHTML={{__html: `${getBlock[0].title}`}} />
							 </div>
							 <div className="team__head-text">
									{getBlock[0].text}
							 </div>

						</div>

						<div className="team__wrap">

							 <ArtSlider getInfo={blockItems()} />

						</div>
				 </div>
			</section>
	 )
}