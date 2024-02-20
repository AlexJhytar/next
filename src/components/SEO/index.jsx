import { apiWP } from "@/api";
import parse from 'html-react-parser';
import { useLocale } from "next-intl";

async function getData( urlEN, urlUA ) {
  let setSeoAPI = [];
  const lang = useLocale();
  let page;
  
  switch (lang) {
    case 'en': {
      page = urlEN;
      break;
    }
    case 'ua': {
      page = urlUA;
      break;
    }
  }
  
  await apiWP.getSEO(page.toString()).then(( result ) => {
    setSeoAPI.push(result.data.head);
  });
  
  return setSeoAPI;
}

export default async function SEO( urlEN, urlUA ) {
  let seoHead = await getData(urlEN, urlUA).then(res => res.toString());
  console.log(seoHead)
  return parse(seoHead);
}