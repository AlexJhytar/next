import { getTranslations } from 'next-intl/server';

const Services = async () => {
  const t = await getTranslations('Services');
  
  return (
    <div className="container">
      <h2>{t('title')}</h2>
    </div>
  );
};

export default Services;