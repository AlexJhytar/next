import { apiWP } from "@/api";
import parse from 'html-react-parser';
import { useLocale } from "next-intl";

export default async function SEO( url ) {
  let seoHead = await getData(url).then(res => res.toString());
  return parse(seoHead);
}

async function getData( url ) {
  let setSeoAPI = [];
  const lang = useLocale();
  let page = lang === 'en' ? `/${url}` : `/ua/${url}`;
  console.log(page)
  
  await apiWP.getSEO(page.toString()).then(( result ) => {
    setSeoAPI.push(result.data.head);
  });
  
  return setSeoAPI;
}