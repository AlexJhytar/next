import { apiWP } from "@/api";
import { blockGutenberg } from "../BlockWP/importBlocks";
import { getLocale } from "next-intl/server";

export default async function BlocksWP( idEN, idUA ) {
  const blocks = await getData(idEN, idUA).then(res => res[0]);
  return blockGutenberg(blocks);
};

async function getData( idEN, idUA ) {
  const blocks = [];
  let lang = await getLocale();
  
  let idPage;
  if (lang === 'en') idPage = idEN;
  if (lang === 'ua') idPage = idUA;
  
  await apiWP.getPages(idPage).then(( result ) => {
    blocks.push(result.block_data);
  });
  return blocks;
}