import BlockTag from "../BlockTag/blockTag";
import './connection.scss';

export default function blockConnection(getBlock) {

	 const phone = [];
	 const mail = [];
	 const social = [];

	 for (let i = 0; i < getBlock[0].list.contact_email_list; i++) {
			let list = 'contact_email_list_' + i;
			let mailText = list + '_contact_email_text';
			let mailURL = list + '_contact_email_link_text';

			mail.push({
				 mailText: getBlock[0].list[mailText],
				 mailUrl: getBlock[0].list[mailURL],
			})
	 }

	 for (let i = 0; i < getBlock[0].list.phone_number_list; i++) {
			let list = 'phone_number_list_' + i;
			let phoneText = list + '_contact_tel_text';
			let phoneURL = list + '_contact_tel_link';

			phone.push({
				 phoneText: getBlock[0].list[phoneText],
				 phoneURL: getBlock[0].list[phoneURL],
			})
	 }

	 for (let i = 0; i < getBlock[0].list.social_network_list; i++) {
			let list = 'social_network_list_' + i;
			let socialText = list + '_social_name_text';
			let socialURL = list + '_link_social_network';
			let socialIcon = list + '_social_icon_image_data';

			social.push({
				 socialText: getBlock[0].list[socialText],
				 socialURL: getBlock[0].list[socialURL],
				 iconURL: getBlock[0].list[socialIcon].url_full,
				 iconW: getBlock[0].list[socialIcon].width,
				 iconH: getBlock[0].list[socialIcon].height,
			})
	 }

	 return (
			<section className="connection">
				 <div className="container">
						<div className="connection__wrap">
							 <div className="connection__info">
									<BlockTag text={getBlock[0].tag} />
									<h2 className="page-title"
											dangerouslySetInnerHTML={{__html: getBlock[0].title}} />

									<div className="connection__info-text">
										 {getBlock[0].text}
									</div>

									<div className="connection__info-links">
										 {
												phone.map((item, index) => {
													 return (
															<div className="link-phone" key={index}>
																 <a href={`tel:${item.phoneURL}`}>{item.phoneText}</a>
															</div>
													 )
												})
										 }
										 {
												mail.map((item, index) => {
													 return (
															<div className="link-mail" key={index}>
																 <a href={`mailto:${item.mailUrl}`}>{item.mailText}</a>
															</div>
													 )
												})
										 }
									</div>
							 </div>

							 <div className="connection__social">
									{
										 social.map((item, index) => {
												return (
													 <a href={item.socialURL} key={index}
															target="_blank" rel="nofollow noreferrer"
															className="social-block">
															<div className="social-block__icon">
																 <img src={item.iconURL}
																			width={item.iconW}
																			height={item.iconH}
																			alt="social icon" />
															</div>
															<div className="social-block__name">
																 {item.socialText}
															</div>
													 </a>
												)
										 })
									}
							 </div>
						</div>
				 </div>

			</section>
	 )
}