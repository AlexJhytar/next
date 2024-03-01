import './projects.scss';
import BlockTag from "../BlockTag/blockTag";
import ProjectsCase from "./projectsCase";
import ProjectsAnimation from "@/components/BlockWP/blocks/BlockProjects/projectsAnimation";

export default function blockProjects( getBlock ) {
  
  return (
    <>
      <section className="block-portfolio" id="block-portfolio">
        
        <div className="container">
          <BlockTag text={getBlock[0].tag}/>
          <h2 className="block-portfolio_title page-title"
              dangerouslySetInnerHTML={{__html: getBlock[0].title}}/>
        </div>
        
        <ProjectsCase template={getBlock[0].list}/>
      
      </section>
      <ProjectsAnimation/>
    </>
  );
}
