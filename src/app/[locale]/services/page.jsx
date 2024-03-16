import Banner from "@/components/layout/Banner";
import SEO from "@/components/SEO";

const Services = async () => {
  const idEN = 734;
  const idUA = 736;
  const url = '/services';
  
  return (
    <>
      {SEO(`${url}`, `/ua/${url}`)}
      {Banner(idEN, idUA)}
    </>
  )
}

export default Services;