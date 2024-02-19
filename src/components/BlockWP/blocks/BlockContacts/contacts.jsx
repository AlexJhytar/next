import React, {memo} from 'react';
import BlockForm from "./form";
import BlockTag from "../BlockTag/blockTag";
// import Cf7FormWrapper from "../../../contactForm/Cf7FormWrapper";
import './contacts.scss';
import ContactSocial from "./contactSocial";

const BlockContacts = ({getBlock, pageLoaded}) => {
	 const time = new Date();
	 time.setSeconds(time.getSeconds() + 6);

	 const socialList = () => {
			let social = [];

			if (getBlock[0].list !== null) {
				 for (let i = 0; i < getBlock[0].list.social_network_contact_list; i++) {
						let list = 'social_network_contact_list_' + i;
						let url = list + '_link_to_social_network';
						let icon = list + '_icon_social_network_image_data';

						social.push({
							 url: getBlock[0].list[url] || '',
							 icon: getBlock[0].list[icon].url_full || '',
							 iconW: getBlock[0].list[icon].width || '',
							 iconH: getBlock[0].list[icon].height || ''
						})
				 }
			}

			return social;
	 }

	 return (
			<section data-theme="dark"
							 className="contacts"
							 id="block-contact">
				 <div className="container">
						<div className="contacts__wrap">
							 <div className="contacts__info">
									<div className="contacts__info-wrap">
										 <BlockTag text={getBlock[0].tag} />
										 <h2 className="contacts__info-title page-title"
												 dangerouslySetInnerHTML={{__html: getBlock[0].title}} />
										 <p className="contacts__info-text">
												{getBlock[0].text}
										 </p>
									</div>
									<div className="contacts__info-social">
										 <div className="social-caption"
													dangerouslySetInnerHTML={{__html: getBlock[0].socialsText}} />
										 <div className="social-buttons">

												<ContactSocial getSocial={socialList()} />
										 </div>
									</div>
							 </div>

							 <div className="contacts__form">
									<Cf7FormWrapper formId={getBlock[0].formID}>
										 <BlockForm
												textButton={getBlock[0].formButton}
												checkboxLabel={getBlock[0].checkboxLabel}
												expiryTimestamp={time}
										 />
									</Cf7FormWrapper>
							 </div>
						</div>
				 </div>
			</section>
	 );
};

export default memo(BlockContacts);