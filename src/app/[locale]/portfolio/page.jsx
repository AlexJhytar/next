import { getTranslations } from 'next-intl/server';

const Portfolio = async () => {
  const t = await getTranslations('Portfolio');
  
  return (
    <div className="container">
      <h2>{t('title')}</h2>
    </div>
  );
};

export default Portfolio;