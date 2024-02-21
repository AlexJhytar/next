import Link from "next/link";
import { useLocale } from "next-intl";

const BannerMainClients = ({getList}) => {
	 let clients = [];
	const lang = useLocale();
	 for (let i = 0; i < getList.list.our_projects_inner_list; i++) {
			let index = 'our_projects_inner_list_' + i;
			const img = index + '_logo_project_inner_image_data';
			const link = index + '_logo_project_inner_link';

			clients.push({
				 img: getList.list[img].url_full,
				 link: getList.list[link]
			})
	 }

	 const clientsList = clients.map((item, index) => {
			return (
				 <Link key={index} href={`/${lang}${item.link}`} className="client-block">
						<img src={item.img} width="186" height="45" alt="partner logo" />
				 </Link>
			)
	 })

	 return (
			<div className="main-banner__clients">
				 <div className="container">
						<div className="main-banner__clients-wrap">
							 {clientsList}
						</div>
				 </div>
			</div>
	 );
};

export default BannerMainClients;
