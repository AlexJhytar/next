import { apiWP } from "@/api";
import { blockGutenberg } from "../BlockWP/importBlocks";
import { getLocale } from "next-intl/server";

export default async function BlocksWP( slug ) {
  const blocks = await getData(slug).then(res => res[0]);
  return blockGutenberg(blocks);
};

async function getData( slug ) {
  const blocks = [];
  let lang = await getLocale();
  
  const idPage = await apiWP.getPages(slug).then(result => {
    return lang === 'en' ? result[0].translations.en : result[0].translations.ua
  });
  
  await apiWP.getPage(idPage).then(( result ) => {
    blocks.push(result.block_data);
  });
  
  return blocks;
}