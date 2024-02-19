import { apiWP } from "@/api";
import { BlockWP } from "../BlockWP/importBlocks";
import { useLocale } from "next-intl";

export default async function BlocksWP( idEN, idUA ) {
  const blocks = await getData(idEN, idUA).then(res => res[0]);
  
  return BlockWP(blocks);
};

async function getData( idEN, idUA ) {
  const blocks = [];
  const lang = useLocale();
  
  let idPage;
  if (lang === 'en') idPage = idEN;
  if (lang === 'ua') idPage = idUA;
  
  await apiWP.link(idPage).then(( result ) => {
    blocks.push(result.data.block_data);
  });
  return blocks;
}