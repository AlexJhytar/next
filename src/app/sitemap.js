import { apiWP } from "@/api";

export default async function sitemap() {
  const dataPage = await pages();
  
  const urlPages = dataPage.map(item => {
    console.log(item.slug)
    
    return {
      url: `${process.env.NEXT_PRODUCTION_URL}/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: .5,
    }
  })
  
  return [
    {
      url: process.env.NEXT_PRODUCTION_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...urlPages
  ]
}

async function pages() {
  const blocks = [];
  await apiWP.link('/pages?lang=en').then(( result ) => {
    blocks.push(result.data);
  });
  return blocks[0];
}