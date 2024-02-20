import { useTranslations } from 'next-intl';
import SEO from "@/components/SEO";
import BlocksWP from "@/components/BlockWP";

export default function Home() {
  const t = useTranslations('Index');
  
  return (
    <>
      {SEO('/', '/ua/golovna')}
      {BlocksWP('/pages/5', '/pages/247')}
    </>
  );
}
