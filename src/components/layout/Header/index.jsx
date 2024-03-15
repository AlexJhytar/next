import logo from '@/img/logo-white.svg';
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";

import ChangeLang from "@/components/Header/ChangeLang";
import CheckFixedHeader from "@/components/Header/CheckFixedHeader";
import Navigation from "@/components/Header/Navigation";
import React from "react";
import Popup from "@/components/Header/popup";

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
              
              <Popup />
            </div>
          </div>
          
          <div className="mob-menu" ><span/></div>
        
        </div>
      </header>
      
      <CheckFixedHeader/>
    </>
  );
};