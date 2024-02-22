import logo from '@/img/logo-white.svg';
import Button from "@/components/UI/Button";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";

import ChangeLang from "@/components/Header/ChangeLang";
import CheckFixedHeader from "@/components/Header/CheckFixedHeader";
import Navigation from "@/components/Header/Navigation";
import React from "react";

export default async function Header() {
  const t = await getTranslations('Menu');
  let lang = await getLocale();
  
  return (
    <>
      <header className="header">
        <div className='container'>
          
          <div className='header__logo'>
            <Link href={'/'}>
              <Image src={logo} width="140" height="30" alt="header artilab logo"/>
            </Link>
          </div>
          
          <div className="header__wrap">
            <div className="header__block">
              
              <Navigation language={lang}/>
            
            </div>
            
            <div className="header__block">
              <ChangeLang lang={lang}/>
              
              <Button
                type="button"
                class="default"
                color="green"
                title={t("Contacts")}
              />
            </div>
          </div>
          
          <div className="mob-menu" ><span/></div>
        
        </div>
      </header>
      
      <CheckFixedHeader/>
    </>
  );
};