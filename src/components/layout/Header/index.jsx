import logo from '@/img/logo-white.svg';
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";

import ChangeLang from "@/components/layout/Header/ChangeLang";
import CheckFixedHeader from "@/components/layout/Header/CheckFixedHeader";
import Navigation from "@/components/layout/Header/Navigation";
import React from "react";
import Popup from "@/components/layout/Header/popup";
import Burger from "@/components/layout/Header/burger";

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
          
          <Burger />
        
        </div>
      </header>
      
      <CheckFixedHeader/>
    </>
  );
};