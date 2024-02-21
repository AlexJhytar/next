import React from 'react';
import Icon from "../../UI/Icon";

const FooterSocial = ({getList}) => {

	 return (
			<>
				 <div className="footer__block-social social-buttons">
						{
							 getList.instagram_url !== '' ? <>
									<a rel="nofollow noreferrer" title="instagram" target="_blank" href={getList.instagram_url}>
										 <Icon name="icon-instagram" />
									</a>
							 </> : ''
						}
						{
							 getList.linkedin_url !== '' ? <>
									<a rel="nofollow noreferrer" title="linkedin" target="_blank" href={getList.linkedin_url}>
										 <Icon name="icon-linkedin" />
									</a>
							 </> : ''
						}
						{
							 getList.telegram_url !== '' ? <>
									<a rel="nofollow noreferrer" title="telegram" target="_blank" href={getList.telegram_url}>
										 <Icon name="icon-telegram" />
									</a>
							 </> : ''
						}
				 </div>
			</>
	 );
};

export default FooterSocial;