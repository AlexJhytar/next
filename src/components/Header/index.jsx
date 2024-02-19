"use client";

import { useState, useEffect } from 'react';
import { useLocale } from "next-intl";

import Link from "next/link";
import Image from 'next/image';

import logo from '@/img/logo-white.svg';
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Navigation from "@/components/Navigation";

export default function Header() {
  
  const [headerClassName, setHeaderClassName] = useState('');
  const locale = useLocale();
  
  const handleScroll = ( headerClassName ) => {
    if (headerClassName !== 'fixed' && window.scrollY >= 200) {
      setHeaderClassName('fixed');
    }
    if (headerClassName === 'fixed' && window.scrollY <= 200) {
      setHeaderClassName('fixed static');
    }
    if (headerClassName === 'fixed static' && window.scrollY === 0) {
      setHeaderClassName('no-animation');
    }
  }
  
  useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]);
  
  return (
      <header className={`header ${headerClassName}`}>
        <div className='container'>
          
          <div className='header__logo'>
            <Link href={`/`}>
              <Image
                src={logo}
                alt="header logo"
                width="140"
                height="30"
              />
            </Link>
          </div>
          
          <div className="header__wrap">
            <div className="header__block">
              
              <nav className="header__block-menu">
                <Navigation lang={locale}/>
              </nav>
            </div>
            
            <div className="header__block">
              <div className="header__block-lang">
                <a className="" href="/en">en</a>
                <a className="active" href="https://artilab.pro/ua/">ua</a>
                <LocaleSwitcher lang={locale}/>
              </div>
            
            
            </div>
          </div>
        </div>
      </header>
  );
};