import SEO from "@/components/SEO";
import BlocksWP from "@/components/BlockWP";

export default function Home() {
  
  return (
    <>
      {SEO('main')}
      {BlocksWP('main')}
    </>
  );
}
