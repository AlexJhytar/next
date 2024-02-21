import React from 'react';
import MenuItem from "./MenuItem";
import {useTranslation} from "react-i18next";

const Navigation = ({toggle, lang}) => {
	 const {t} = useTranslation();

	 const itemMenu = [
			{
				 link: `/${lang}/services`, menu: "Services"
			},
			{
				 link: `/${lang}/portfolio`, menu: "Portfolio"
			},
			{
				 link: `/${lang}/about-us`, menu: "About us"
			},
			// {
			// 	 link: `/${lang}/careers`, menu: "Careers"
			// },
			// {
			// 	 link: `/${lang}/blog`, menu: "Blog"
			// },
			{
				 link: `/${lang}/contacts`, menu: "Contacts"
			}
	 ]

	 return (
			<ul>
				 {itemMenu.map((item) => (
						<MenuItem onClick={toggle} menu={t(item.menu)} link={item.link} key={item.menu} />
				 ))}
			</ul>
	 );
};

export default Navigation;