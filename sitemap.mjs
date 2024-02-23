import { writeFileSync } from "fs";
import axios from "axios";
import prettier from "prettier";

async function generate() {
  const languages = {en: "sitemap-en.xml", ua: "sitemap-ua.xml",};
  let api = 'https://api.artilab.pro/wp-json/wp/v2';
  let prod = 'https://next-artilab.vercel.app';
  
  let siteMaps = []
  for (const [lang, sitemapName] of Object.entries(languages)) {
    const response = await axios.get(`${api}/pages?lang=${lang}`);
    const pages = await response.data;
    siteMaps.push(sitemapName);
    
    const siteUrl = lang === "ua" ? `${prod}/ua` : prod;
    
    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${siteUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
        
        ${pages.map(( url ) => {
      return `
              <url>
                <loc>${siteUrl}/${url.slug}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
              </url>
            `;
    }).join("")}
      </urlset>
    `;
    
    let formattedMap = await prettier.format(sitemap, {parser: "html"});
    writeFileSync(`public/${sitemapName}`, formattedMap);
  }
  
  const sitemapIndex = `
  <?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${siteMaps.map(( sitemap ) => {
    return `
          <sitemap>
            <loc>${prod}/${sitemap}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </sitemap>
        `;
  }).join("")}
  </sitemapindex>
`;
  
  const formattedMaps = await prettier.format(sitemapIndex, {parser: "html"});
  writeFileSync("public/sitemap.xml", formattedMaps);
}

generate();