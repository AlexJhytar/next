import { getLocale } from "next-intl/server";
import { apiWP } from "@/api";

export default async function PortfolioPage( {params} ) {
  const slug = await params.slug;
  const data = await getPage(slug).then(res => res[0]);
  
  return <div className="container">Post: {data.id}</div>
}

async function getPage( params ) {
  const lang = await getLocale();
  return await apiWP.link(`/portfolio?slug=${params}&lang=${lang}`).then(res => res.data);
}