import { getLocale } from 'next-intl/server';
import { apiWP } from "@/api";
import portfolioProjects from "@/app/[locale]/portfolio/portfolioProjects";

export default async function portfolio({searchParams }, slug) {
  const project = await getData();
  const page = searchParams.page;
  console.log(slug)
  
  return portfolioProjects(project, page, 'portfolio');
};

async function getData() {
  const lang = await getLocale();
  let totalPage, getData;
  await apiWP.link(`/portfolio?lang=${lang}`).then(( res ) => {
    const {data, headers} = res;
    totalPage = parseInt(headers['x-wp-total']);
    getData = data;
  });
  
  return {
    pagesData: getData,
    existPage: totalPage
  };
}