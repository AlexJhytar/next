import Links from "../../../UI/Links";
import './quote.scss';
import QuoteMotion from "@/components/BlockWP/blocks/BlockQuote/quoteMotion";

export default async function blockQuote( getData, lang ) {
  
  return (
    <QuoteMotion>
      <div className="container">
        <div className="block-quote__wrap">
          <div className="block-quote__image">
            <img src={getData[0].image} width={getData[0].imageW} height={getData[0].imageH} alt=""/>
          </div>
          <div className="block-quote__content">
            <div className="author-name">
              {getData[0].name}
            </div>
            <div className="author-position">
              {getData[0].position}
            </div>
            <div className="author-quote">
              {getData[0].text}
            </div>
            {
              getData[0].link === '' ? '' :
                <div className="block-quote__content-link">
                  <Links url={`${lang}${getData[0].link}`} text={getData[0].linkText}/>
                </div>
            }
          </div>
        </div>
      </div>
    </QuoteMotion>
  )
}