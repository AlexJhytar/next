import SEO from "@/components/SEO";
import BlocksWP from "@/components/BlockWP";

export default function Home() {
  
  return (
    <>
      {SEO('/', '/ua/main')}
      {BlocksWP('/pages/5', '/pages/247')}
    </>
  );
}
