import React, {useState, useEffect} from 'react';
import logo from '../../../assets/img/logo-white.svg';
import Button from "../../UI/Button";
import ContactModal from "../ContactModal";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router";
import LoadingSpinner from "../../UI/LoadingSpinner";

const Header = () => {
	 const [showModal, setShowModal] = useState(false);
	 const [changedLang, setChangedLang] = useState(false);
	 const [headerClassName, setHeaderClassName] = useState('');
	 const [isOpen, toggleOpen] = useState(false);
	 const navigate = useNavigate();
	 const pathLocation = useLocation().pathname.slice(4) || "";

	 const {t, i18n} = useTranslation();

	 const handleScroll = (headerClassName) => {
			if (headerClassName !== 'fixed' && window.pageYOffset >= 200) {
				 setHeaderClassName('fixed');
			}
			if (headerClassName === 'fixed' && window.pageYOffset <= 200) {
				 setHeaderClassName('fixed static');
			}
			if (headerClassName === 'fixed static' && window.pageYOffset === 0) {
				 setHeaderClassName('no-animation');
			}
	 }

	 useEffect(() => {
			window.onscroll = () => handleScroll(headerClassName);
	 }, [headerClassName]);

	 const menuToggle = () => {
			toggleOpen((current) => !current);
	 };

	 const handleChangeLanguage = (lang: string) => {
			setChangedLang(true);
			i18n.changeLanguage(lang);
			if (pathLocation !== '') {
				 navigate(`/${lang}/${pathLocation}`);
			} else {
				 navigate(`/${lang}`);
			}
			window.location.reload();
	 }

	 return (
			<>
				 {
						changedLang ? <LoadingSpinner /> :
							 <header className={`header ${headerClassName}`}>
									<div className='container'>

										 <div className='header__logo'>
												<Link onClick={() => !toggleOpen(false)} to={`/${i18n.language}`}>
													 <img src={logo} width="140" height="30" alt="header logo" />
												</Link>
										 </div>

										 <div className="header__wrap">
												<div className="header__block">

													 <nav className="header__block-menu">
															<Navigation
																 lang={i18n.language}
																 toggle={() => toggleOpen(false)} />
													 </nav>
												</div>

												<div className="header__block">
													 <div className="header__block-lang">
										 <span onClick={() => {
												handleChangeLanguage("ua")
										 }}
													 className={i18n.language === "ua" ? 'active' : ''}>UA</span>
															<span onClick={() => {
																 handleChangeLanguage("en")
															}}
																		className={i18n.language === "en" ? 'active' : ''}>EN</span>
													 </div>

													 <Button
															type="button"
															class="default"
															color="green"
															title={t("Contact us")}
															onClick={(e) => {
																 e.preventDefault();
																 setShowModal(true)
															}}
													 />
												</div>
										 </div>

										 <MenuToggle state={isOpen} toggle={menuToggle} />
									</div>


							 </header>
				 }

				 <ContactModal
						colorForm="theme-white"
						modal={showModal}
						close={(e) => {
							 e.preventDefault();
							 setShowModal(false);
						}}
				 />
			</>
	 );
};

export default Header;