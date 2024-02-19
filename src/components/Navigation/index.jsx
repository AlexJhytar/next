import React from 'react';
import { useTranslations } from "next-intl";
import NavMenu from "@/components/Navigation/NavMenu";

const Navigation = ( {lang} ) => {
  const t = useTranslations('Menu');
  
  const itemMenu = [
    {link: `/${lang}/about`, menu: t('about')},
    {link: `/${lang}/contacts`, menu: t('contacts')}
  ]
  
  return (
    <NavMenu obj={itemMenu} />
  );
};

export default Navigation;