import SEO from "@/components/SEO";
import Banner from "@/components/layout/Banner";
import BlocksWP from "@/components/BlockWP";

const Contacts = () => {
  const idEN = '756';
  const idUA = '758';
  const url = '/terms-conditions';
  
  return (
    <>
      {SEO(`${url}`, `/ua/${url}`)}
      {Banner(idEN, idUA)}
      {BlocksWP(idEN, idUA)}
    </>
  )
}

export default Contacts;