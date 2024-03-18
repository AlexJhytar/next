import SEO from "@/components/SEO";
import Banner from "@/components/layout/Banner";
import { headers } from 'next/headers';
import BlocksWP from "@/components/BlockWP";

const Contacts = () => {
  const idEN = '475';
  const idUA = '666';
  const url = '/contacts';
  
  return (
    <>
      {SEO(`${url}`, `/ua/${url}`)}
      {Banner(idEN, idUA)}
      {BlocksWP(idEN, idUA)}
    </>
  )
}

export default Contacts;