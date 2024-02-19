import { apiWP } from "@/api";
import parse from 'html-react-parser';
import { useLocale } from "next-intl";

export default async function SEO( {urlEN, urlUA} ) {
  let setSeoAPI = [];
  const lang = useLocale();
  let page;
  console.log(lang)
  
  switch (lang) {
    case 'en': {
      page = urlEN || '';
      break;
    }
    case 'ua': {
      page = urlUA || '';
      break;
    }
  }
  
  await apiWP.getSEO(page).then(( result ) => {
    setSeoAPI.push(result.data.head);
  });
  
  console.log(setSeoAPI)

  return parse(setSeoAPI.toString());
}