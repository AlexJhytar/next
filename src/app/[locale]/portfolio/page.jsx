import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations('Contact');
  
  return (
    <div className="container">
      <h2>{t('title')}</h2>
    </div>
  );
};

export default Portfolio;