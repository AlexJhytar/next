import axios from "axios";
import Link from "next/link";
import logo from "@/img/logo.svg"
import FooterMail from "./footerMail";
import FooterPhone from "./footerPhone";
import FooterSocial from "./footerSocial";
import { useLocale } from "next-intl";
import {getTranslations} from 'next-intl/server';
import Image from "next/image";

export default async function Footer() {
  const year = new Date().getFullYear();
  const data = await getFooterInfo();
  
  const t = await getTranslations('Menu');
  let lang = useLocale() === 'en' ? '' : useLocale();
  
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer__wrap">
            <div className="footer__block">
              <div className="footer__block-logo">
                <Link href={`${lang}`}>
                  <Image src={logo} width="140" height="30" alt="footer artilab logo"/>
                </Link>
              </div>
            </div>
            <div className="footer__block">
              <div className="footer__block-caption">
                {t("Services")}
              </div>
              <ul className="footer__block-menu">
                <li><Link href={`${lang}/services`}>{t("Services")}</Link></li>
              </ul>
            </div>
            <div className="footer__block">
              <div className="footer__block-caption">
                {t("Portfolio")}
              </div>
              <ul className="footer__block-menu">
                <li><Link href={`${lang}/portfolio`}>{t("Portfolio")}</Link></li>
              </ul>
            </div>
            <div className="footer__block">
              <div className="footer__block-caption">
                {t("About")}
              </div>
              <ul className="footer__block-menu">
                <li><Link href={`${lang}/about-us`}>{t("About")}</Link></li>
              </ul>
            </div>
            <div className="footer__block">
              <div className="footer__block-caption">
                {t("Contacts")}
              </div>
              
              <FooterPhone getList={data.phone_list}/>
              <FooterMail getList={data.mail_list}/>
              <FooterSocial getList={data.socials_list}/>
            </div>
            
            <div className="footer__bottom">
              <div className="footer__bottom-corp">
                © {year} Artilab, All Rights Reserved.
              </div>
              <div className="footer__bottom-links">
                <Link href={`${lang}/privacy-policy`}>{t('Privacy')}</Link>
                <Link href={`${lang}/terms-conditions`}>{t('Terms')}</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
};

async function getFooterInfo() {
  return await axios.get('https://api.artilab.pro/wp-json/options/all').then(res => res.data);
}