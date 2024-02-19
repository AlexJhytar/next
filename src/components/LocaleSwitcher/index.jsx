import { useTranslations } from 'next-intl';
import LocaleSwitcherSelect from "@/components/LocaleSwitcher/select";
import { locales } from '@/config';

export default function LocaleSwitcher( {lang} ) {
  const t = useTranslations('Index');
  
  return (
    <LocaleSwitcherSelect defaultLang={lang}>
      {locales.map(( cur ) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}