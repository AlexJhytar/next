import BannerMainWords from "./bannerMainWords";
import Head from "next/head";

import './banner-main.scss';

export default function bannerMain( blockBanner ) {
  
  return (
    
    <>
      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </Head>
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
          
          
          {/*<BannerMainClients getList={item} />*/}
        </div>
      </section>
    </>
  )
};
