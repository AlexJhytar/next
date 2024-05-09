import { getLocale } from "next-intl/server";
import { apiWP } from "@/api";
import Banner from "@/components/layout/Banner";

export default async function PortfolioPage( {params} ) {
  const slug = await params.slug;
  const data = await getPage(slug).then(res => res[0]);
  const idPage = await data.id;
  
  return (
    <>
      {/*{Banner(slug)}*/}
    </>
  )
}

async function getPage( params ) {
  const lang = await getLocale();
  return await apiWP.link(`/portfolio?slug=${params}&lang=${lang}`).then(res => res.data);
}