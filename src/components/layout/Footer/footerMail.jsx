import Link from "next/link";

const FooterMail = ({getList}) => {

	 let mailList = [];
	 for (let i = 0; i < getList.length; i++) {
			mailList.push({
				 mail: getList[i].mail || ''
			})
	 }

	 return (
			<>
				 {
						mailList.map((item, index) => {
							 return (
									<div className="footer__block-mail" key={index}>
										 <Link href={`mailto:${item.mail}`}>{item.mail}</Link>
									</div>
							 )
						})
				 }
			</>
	 );
};

export default FooterMail;