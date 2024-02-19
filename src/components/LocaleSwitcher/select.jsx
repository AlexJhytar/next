import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from "react";

const LocaleSwitcherSelect = ( {children, defaultLang} ) => {
  const router = useRouter();
  let pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  
  const switchLocale = e => {
    const newLocale = e.target.value;
    const currentPath = pathname.split('/');
    
    if (currentPath.length >= 2 && newLocale !== 'en') {
      currentPath[1] = `${newLocale}/${currentPath[1]}`;
    } else {
      currentPath[1] = newLocale;
    }
    
    const newPath = currentPath.join('/');
    router.push(newPath)
  }
  
  return (
    <>
      <select
        defaultValue={defaultLang}
        disabled={isPending}
        onChange={switchLocale}
      >
        {children}
      </select>
    </>
  );
};

export default LocaleSwitcherSelect;