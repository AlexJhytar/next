import SEO from "@/components/SEO";
import BlocksWP from "@/components/BlockWP";

export default function Home() {
  
  return (
    <>
      {SEO('/', '/ua/main')}
      {BlocksWP('5', '247')}
    </>
  );
}
