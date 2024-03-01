import Link from "next/link";
import { getLocale } from "next-intl/server";

export default async function ServiceBox( {list} ) {
  const lang = await getLocale();
  
  return list.map((item, i) => {
    return (
      <Link href={`/${lang}${item.urlLink}`}
            className="services__block"
            key={i}
      >
        <div className="block-icon">
          <img src={item.iconURL}
               width={item.iconWidth}
               height={item.iconHeight}
               alt="service icon"/>
        </div>
        <div className="block-title">
          {item.title}
        </div>
        <div className="block-link">
          {item.textLink}
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
      </Link>
    )
  })
}