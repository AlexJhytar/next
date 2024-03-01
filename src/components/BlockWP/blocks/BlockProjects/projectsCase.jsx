import Link from "next/link";
import Button from "../../../UI/Button";
import ProjectsItems from "./projectsItems";
import ProjectsImage from "./projectsImage";
import { getLocale } from "next-intl/server";

const ProjectsCase = async ({template}) => {
	const lang = await getLocale();

	 const caseBlock = [];
	 for (let i = 0; i < template.projects_list; i++) {
			let list = 'projects_list_' + i;
			const button = list + "_button";
			const title = list + "_title";
			const text = list + "_text";
			const description = list + "_description";
			const imgALT = list + "_image_alt_projects";
			const link = list + "_link_projects";
			const imgList = list + '_image_image_portfolio_list';

			caseBlock.push({
				 buttonText: template[button],
				 title: template[title],
				 text: template[text],
				 subtitle: template[description],
				 link: template[link],
				 imgALT: template[imgALT],
				 imgList: template[imgList],
				 index: i
			});
	 }

	 return (
			<div className="portfolio-inner">
				 {
						caseBlock.map((item, i) => {
							 return (
									<div className="block-portfolio-case" key={i}>
										 <div className="container">
												<div className="block-portfolio-case__wrap">

													 <Link href={`/${lang}${item.link}`}
																 className="block-portfolio-case__image">
															<div className="block-image">
																 <div className="block-title"
																			dangerouslySetInnerHTML={{__html: item.text}} />
																 <ProjectsImage
																		getImage={template}
																		index={item.index}
																		count={item.imgList} />
															</div>
													 </Link>

													 <div className="block-portfolio-case__content">
															<div className="block-portfolio-case__info">
																 <div className="case-info">
																		<h3 className="case-info_title"
																				dangerouslySetInnerHTML={{__html: item.title}} />
																		<span className="case-info_text"
																					dangerouslySetInnerHTML={{__html: item.subtitle}} />
																 </div>
															</div>

															<ProjectsItems items={template} index={i} />
													 </div>
												</div>

												<div className="block-portfolio-case__button">
													 <Link href={`/${lang}${item.link}`}>
															<Button
																 class="mixed"
																 color="green"
																 type="button"
																 title={item.buttonText}
																 icon="arrow"
															/>
													 </Link>
												</div>
										 </div>
									</div>
							 )
						})
				 }

			</div>
	 );
}

export default ProjectsCase;