import { useTranslations } from 'next-intl';
import SEO from "@/components/SEO";

export default function Home() {
  const t = useTranslations('Index');
  
  return (
    <>
      <SEO urlEN={'/en'} urlUA={'/ua/golovna'}/>
      
      <div className="container">
        <h1>{t('title')}</h1>
      </div>
    </>
  );
}
