import SEO from "@/components/SEO";
import Banner from "@/components/layout/Banner";
import BlocksWP from "@/components/BlockWP";

export default function defaultPage( slug ) {
  return (
    <>
      {SEO(slug)}
      {Banner(slug)}
      {BlocksWP(slug)}
    </>
  );
}