import { getLocale } from 'next-intl/server';
import { apiWP } from "@/api";
import portfolioProjects from "@/app/[locale]/portfolio/portfolioProjects";

export default async function portfolio() {
  const project = await getData();
  const lang = await getLocale();
  
  return portfolioProjects(project, lang);
};

async function getData() {
  const lang = await getLocale();
  return await apiWP.link(`/portfolio?per_page=10&page=1&lang=${lang}`).then(result => result.data);
}