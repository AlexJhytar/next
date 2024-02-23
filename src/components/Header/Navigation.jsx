import Link from "next/link";
import { getTranslations } from 'next-intl/server';

export default async function Navigation( {language} ) {
  const t = await getTranslations('Menu');
  const lang = language === 'en' ? '' : `/${language}`;
  
  const itemMenu = [
    {
      link: `${lang}/services`, menu: `${t('Services')}`
    },
    {
      link: `${lang}/portfolio`, menu: `${t('Portfolio')}`
    },
    {
      link: `${lang}/about`, menu: `${t('About')}`
    },
    {
      link: `${lang}/contacts`, menu: `${t('Contacts')}`
    }
  ]
  
  return  <nav className="header__block-menu">
    <ul>
      {
        itemMenu.map(item => {
          return (
            <li key={item.menu}>
              <Link href={item.link}> {item.menu} </Link>
            </li>
          )
        })
      }
    </ul>
  </nav>
};