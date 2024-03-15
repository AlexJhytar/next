import Image from "next/image";
import Link from "next/link";
import iconIns from "@/svg/instagram.svg";
import iconLin from "@/svg/linkedin.svg";
import iconTel from "@/svg/telegram.svg";

const FooterSocial = ({getList}) => {

	 return (
			<>
				 <div className="footer__block-social social-buttons">
						{
							 getList.instagram_url !== '' ? <>
									<Link rel="nofollow noreferrer" title="instagram" target="_blank" href={getList.instagram_url}>
										<Image src={iconIns} alt="icon artilab instagram"/>
									</Link>
							 </> : ''
						}
						{
							 getList.linkedin_url !== '' ? <>
									<Link rel="nofollow noreferrer" title="linkedin" target="_blank" href={getList.linkedin_url}>
										<Image src={iconLin} alt="icon artilab linkedin"/>
									</Link>
							 </> : ''
						}
						{
							 getList.telegram_url !== '' ? <>
									<Link rel="nofollow noreferrer" title="telegram" target="_blank" href={getList.telegram_url}>
										<Image src={iconTel} alt="icon artilab telegram" />
									</Link>
							 </> : ''
						}
				 </div>
			</>
	 );
};

export default FooterSocial;