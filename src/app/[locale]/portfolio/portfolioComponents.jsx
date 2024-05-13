"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import icon_grid from "@/svg/grid.svg";
import icon_list from "@/svg/list.svg";
import { usePathname, useRouter } from "next/navigation";

const PortfolioComponents = () => {
  const [select, setSelect] = useState(false);
  const route = usePathname();
  
  const changeClass = e => {
    setSelect(select => !select);
    const wrap = document.querySelector('.portfolio__wrap');
    wrap.classList.toggle("list-style");
  }
  
  useEffect(() => {
  
  }, [setSelect]);
  
  return (
    <> { route === '/portfolio' ?
      <div className="banner__components">
        <div className="banner__views">
          <div className="container">
            <ul>
              <li data-style="grid" onClick={changeClass} className={select ? '' : 'active'}>
                <Image src={icon_grid} alt="icon grid"/>
              </li>
              <li data-style="list" onClick={changeClass} className={select ? 'active' : ''}>
                <Image src={icon_list} alt="icon list"/>
              </li>
            </ul>
          </div>
        </div>
        {/*<div className="banner__tags">*/}
        {/*  <div className="container">*/}
        {/*    <div className="banner__tags-wrap">*/}
        {/*      <a className="active" href="https://artilab.pro/portfolio/">All</a>*/}
        {/*      <a className="" href="https://artilab.pro/portfolio/wordpress/">Wordpress</a>*/}
        {/*      <a className="" href="https://artilab.pro/portfolio/opencart/">Opencart</a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div> : ''
    }
    </>
  );
};

export default PortfolioComponents;