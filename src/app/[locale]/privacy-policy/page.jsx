import SEO from "@/components/SEO";
import Banner from "@/components/layout/Banner";
import BlocksWP from "@/components/BlockWP";

const Contacts = () => {
  const idEN = '3';
  const idUA = '677';
  const url = '/privacy-policy';
  
  return (
    <>
      {SEO(`${url}`, `/ua/${url}`)}
      {Banner(idEN, idUA)}
      {BlocksWP(idEN, idUA)}
    </>
  )
}

export default Contacts;