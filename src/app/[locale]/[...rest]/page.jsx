import { apiWP } from "@/api";
import { notFound } from 'next/navigation';
import defaultPage from "@/app/[locale]/default";

export default async function CatchAllPage({params}) {
  const data = await getPages();
  const slug = params.rest[0];
  
  let links = [];
  data.map(page => {
    links.push(page.slug)
    //console.log(page.slug)
  })
  
  if (links.includes(slug)) {
    return defaultPage();
  } else {
    return notFound();
  }
}

async function getPages() {
  return await apiWP.link('/pages').then(result => result.data);
}