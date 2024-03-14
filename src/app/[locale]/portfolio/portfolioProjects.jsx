import Link from "next/link";
import Button from "@/components/UI/Button"
import PortfolioImg from "./portfolioImg"
import "./portfolio.scss"

export default async function portfolioProjects( data, searchParams ) {
  
  let page = +searchParams;
  page = !page || page < 1 ? 1 : page;
  
  const per_page = 2;
  const totalPage = Math.ceil(data.existPage/per_page)
  const start = (page - 1)*per_page;
  const end = start + per_page;
  
  const entriesPerPage = data.pagesData.slice(start, end);
  const projectLayout = entriesPerPage.map(item => {
    return (
      <Link href={item.slug} className="portfolio__block" key={item.id}>
        <div className="portfolio__block-image">
          <div className="block-title"
               dangerouslySetInnerHTML={{__html: item.acf.title_portfolio_inf}}
          />
          
          <PortfolioImg getImage={item.gallery_post}/>
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
  
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  
  return (
    <section className="portfolio">
      
      <div className="container">
        <div className={`portfolio__wrap list`}>
          {projectLayout}
        </div>
        
        <div className="portfolio__pagination">
          {page === 1 ?
            <button className="pagination-button button-prev" disabled type="button"/>
            :
            <Link href={`?page=${prevPage}`}>
              <button className="pagination-button button-prev" type="button"/>
            </Link>
          }
          
          <span className="current-page">{page}</span>
          <span>/</span>
          <span className="total-page">{totalPage}</span>
          {page === totalPage ?
            <button className="pagination-button button-next" disabled type="button"/>
            :
            <Link href={`?page=${nextPage}`}>
              <button className="pagination-button button-next" type="button"/>
            </Link>
          }
        </div>
      </div>
    </section>
  )
}