'use client';

import "./about.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function About() {
  const t = useTranslations('About');
  const pathName = usePathname();
  
  return (
    <section className="s-about">
      <div className="container">
        <p>
          <br/>
        </p>
        <p><br/></p>
        <p><br/></p>
        <p><br/></p>
        <p><br/></p>
        <h1>{t('title')}</h1>
        <Link href={`${pathName}/team`}> {t('team')} {`${pathName}/team`} </Link>
      </div>
    </section>
  );
}
