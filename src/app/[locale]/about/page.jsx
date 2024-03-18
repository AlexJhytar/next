import "./about.scss";
import SEO from "@/components/SEO";
import Banner from "@/components/layout/Banner";
import BlocksWP from "@/components/BlockWP";

export default function About() {
  const idEN = 430;
  const idUA = 664;
  const url = '/about';
  
  return (
    <>
      {SEO(`${url}`, `/ua/${url}`)}
      {Banner(idEN, idUA)}
      {BlocksWP(idEN, idUA)}
    </>
  )
}
