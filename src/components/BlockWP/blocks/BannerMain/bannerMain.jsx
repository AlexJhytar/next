import BannerMainWords from "@/components/BlockWP/blocks/BannerMain/bannerMainWords";
import './banner-main.scss';
import BannerMainClients from "@/components/BlockWP/blocks/BannerMain/bannerMainClients";

export default function bannerMain( blockBanner ) {
  
  return (
    <>
      <section className={`main-banner true`}>
        <div className="main-banner__wrap">
          <div className="main-banner__content">
            <div className="ellipse one"><span/></div>
            <div className="ellipse two"><span/></div>
            <div className="container">
              <div className="main-banner__title">
                
                <h1>
                  <span dangerouslySetInnerHTML={{__html: blockBanner[0].title_1}}/>
                  <span dangerouslySetInnerHTML={{__html: blockBanner[0].title_2}}/>
                </h1>
                
                <BannerMainWords getWord={blockBanner[0].list}/>
              </div>
              
              <div className="main-banner__subtitle">
                <span dangerouslySetInnerHTML={{__html: blockBanner[0].subtitle}}/>
              </div>
            </div>
          </div>
          
          
          <BannerMainClients getList={blockBanner[0].list} />
        </div>
      </section>
    </>
  )
};
