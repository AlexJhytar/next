import { apiWP } from "@/api";
import Link from "next/link";
import Button from "@/components/UI/Button"
import PortfolioImg from "./portfolioImg"
import "./portfolio.scss"

export default function portfolioProjects( project, lang ) {
  
  let catID, url;
  
  const categories = async () => {
    const result = await apiWP.link(`/portfolio_taxonomy?lang=${lang}`);
    setCategory(result.data);
  }
  
  // for (let i = 0; i < category.length; i++) {
  //   if (category[i].slug === categoryId) {
  //     catID = category[i].id;
  //   }
  // }
  
  const PortfolioTags = () => {
    const tags = category.map(( item ) => {
      return (
        <PortfolioTagLink
          key={item.id}
          onClick={() => setLoading(true)}
          category={item.translations[lang]}
          link={`/${i18n.language}/portfolio/category/${item.slug}/`}
          title={item.name}
        />
      )
    })
    
    return (
      <div className="portfolio__tags">
        <div className="container">
          <div className="portfolio__tags-wrap">
            {
              catID === undefined ?
                <Link className="active" to={`/${i18n.language}/portfolio`}
                > {t('All')}</Link>
                : <Link to={`/${i18n.language}/portfolio`}> {t('All')}</Link>
            }
            {tags}
          </div>
        </div>
      </div>
    )
  }
  
  const PortfolioView = () => {
    const handleClick = ( style ) => () => {
      setViewStyle(style);
      localStorage.setItem('style', style);
    };
    
    return (
      <div className="portfolio__views">
        <div className="container">
          <ul>
            <li onClick={handleClick('grid')}
                className={localStorage.getItem('style') === 'grid' || viewStyle === 'grid' ? 'active' : ''}>
              <Icon name="icon-grid"/>
            </li>
            <li onClick={handleClick('list')}
                className={localStorage.getItem('style') === 'list' || viewStyle === 'list' ? 'active' : ''}>
              <Icon name="icon-list"/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  const PortfolioPagination = () => {
    return (
      <div className="portfolio__pagination">
        <button className="pagination-button button-prev"
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  setLoading(true);
                  setOffTop(topWrap.current.offsetTop + currentPage - 160)
                }} type="button"/>
        <span className="current-page">{currentPage}</span>
        <span>/</span>
        <span className="total-page">{totalPage}</span>
        <button className="pagination-button button-next"
                disabled={currentPage === totalPage}
                onClick={() => {
                  setCurrentPage(currentPage + 1)
                  setLoading(true)
                  setOffTop(topWrap.current.offsetTop + currentPage - 160)
                }} type="button"/>
      </div>
    )
  }
  
  // if (catID === undefined) {
  //   url = `/portfolio?per_page=10&page=${currentPage}&lang=${lang}&orderby=menu_order&order=asc`;
  // }
  // else {
  //   url = `/portfolio?per_page=10&page=${currentPage}&portfolio_taxonomy=${catID}&lang=${lang}&orderby=menu_order&order=asc`;
  // }
  const projects = async () => {
    await apiWP.link(url).then(( res ) => {
      const {data, headers} = res;
      setTotalPage(parseInt(headers['x-wp-totalpages']));
      setProject(data);
    })
  }
  
  const projectLayout = project.map(item => {
    return (
      <Link href={item.slug} className="portfolio__block" key={item.id}>
        <div className="portfolio__block-image">
          <div className="block-title"
               dangerouslySetInnerHTML={{__html: item.acf.title_portfolio_inf}}
          />
          
          <PortfolioImg getImage={item.gallery_post} />
        </div>
        <div className="portfolio__block-content">
          <div className="block-title"
               dangerouslySetInnerHTML={{__html: item.title.rendered}}/>
          <div className="block-info">
															<span
                 className="block-info_year">
																 {item.acf.create_project_date_portfolio}
															</span>
            <span className="block-info_separator">/</span>
            <span className="block-info_description"
                  dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}/>
          </div>
          <div className="block-text"
               dangerouslySetInnerHTML={{__html: item.acf.description_portfolio_inf}}/>
          <div className="block-tags">
            {
              // item.cat_slug_post.map(( cat, index ) => {
              //   return (
              //     <span key={index}>{cat}</span>
              //   )
              // })
            }
          </div>
          
          <div className="block-link">
            Read more
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg"
                 width="32" height="32" viewBox="0 0 32 32">
              <g fill="none" strokeWidth="1.2"
                 strokeLinejoin="round" strokeMiterlimit="10">
                <circle className="arrow-icon--circle" cx="16" cy="16"
                        r="15.62" strokeWidth="1.4"/>
                <path className="arrow-icon--arrow"
                      d="M17.14 10.93L23.91 16l-6.57 5.57M24.23 16.10h-21.58 "/>
              </g>
            </svg>
          </div>
          
          <Button
            class="mixed"
            color="green"
            type="button"
            title={item.acf.button_text_portfolio_inf}
            icon="arrow"
          />
        
        </div>
      </Link>
    )
  });
  
  return (
    <section className="portfolio">
      
      <div className="container">
        <div className={`portfolio__wrap list`}>
          {projectLayout}
        </div>
      
      </div>
    </section>
  )
}