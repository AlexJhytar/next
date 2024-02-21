import React, {useEffect, useState} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";
import logo from "../../../assets/img/logo.svg"
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import FooterMail from "./footerMail";
import FooterPhone from "./footerPhone";
import FooterSocial from "./footerSocial";

const Footer = () => {
	 const year = new Date().getFullYear();
	 const {t} = useTranslation();
	 const lang = i18n.language;
	 const [footerArr, setFooterArr] = useState([]);
	 const [isPageLoaded, setIsPageLoaded] = useState(false);

	 useEffect(() => {
			const getFooter = async () => {
				 await axios.get('https://api.template.cv.ua/wp-json/options/all')
				 .then((res) => {
						setFooterArr(res.data);
						setIsPageLoaded(true);
				 })
			}
			getFooter();
	 }, [lang]);

	 return (
			<>
				 {
						isPageLoaded === true ?
							 <>
									<footer id={'footer'} className="footer">
										 <div className="container">
												<div className="footer__wrap">
													 <div className="footer__block">
															<div className="footer__block-logo">
																 <NavLink to={`/${i18n.language}`}>
																		<img src={logo} width="140" height="30" alt="footer logo" />
																 </NavLink>
															</div>
													 </div>
													 <div className="footer__block">
															<div className="footer__block-caption">
																 {t("Services")}
															</div>
															<ul className="footer__block-menu">
																 <li><NavLink to={`services`}>{t("Services")}</NavLink></li>
															</ul>
													 </div>
													 <div className="footer__block">
															<div className="footer__block-caption">
																 {t("Portfolio")}
															</div>
															<ul className="footer__block-menu">
																 <li><NavLink to={`portfolio`}>{t("Portfolio")}</NavLink></li>
															</ul>
													 </div>
													 <div className="footer__block">
															<div className="footer__block-caption">
																 {t("About us")}
															</div>
															<ul className="footer__block-menu">
																 <li><NavLink to={`about-us`}>{t("About us")}</NavLink></li>
															</ul>
													 </div>
													 <div className="footer__block">
															<div className="footer__block-caption">
																 {t("Contacts")}
															</div>

															<FooterPhone getList={footerArr.phone_list} />
															<FooterMail getList={footerArr.mail_list} />
															<FooterSocial getList={footerArr.socials_list} />
													 </div>

													 <div className="footer__bottom">
															<div className="footer__bottom-corp">
																 © {year} Artilab, All Rights Reserved.
															</div>
															<div className="footer__bottom-links">
																 <NavLink to={`privacy-policy`}>{t("Privacy policy")}</NavLink>
																 <NavLink to={`terms-conditions`}>{t("Terms & Conditions")}</NavLink>
															</div>
													 </div>
												</div>
										 </div>
									</footer>
							 </> : ""
				 }
			</>
	 );
};

export default Footer;