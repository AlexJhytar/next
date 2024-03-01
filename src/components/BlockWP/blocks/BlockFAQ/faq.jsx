import BlockTag from "../BlockTag/blockTag";
import "./faq.scss";
import FaqItems from "@/components/BlockWP/blocks/BlockFAQ/faqItems";

export default function blockFaq( getBlock ) {
  const blockList = [];
  for (let i = 0; i < getBlock[0].list.faq_list; i++) {
    let answer = 'faq_list_' + i + '_answer';
    let question = 'faq_list_' + i + '_question';
    
    blockList.push({
      question: getBlock[0].list[question] || '',
      answer: getBlock[0].list[answer] || ''
    })
  }
  
  return (
    <section className={`faq`}>
      <div className="container">
        <BlockTag text={getBlock[0].tag}/>
        <h2 className="faq__title page-title"
            dangerouslySetInnerHTML={{__html: `${getBlock[0].title}`}}
        />
        <div className="faq__wrap">
          <FaqItems list={blockList}/>
        </div>
      </div>
    </section>
  );
}