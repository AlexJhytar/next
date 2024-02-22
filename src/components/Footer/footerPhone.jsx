import Link from "next/link";

const FooterPhone = ({getList}) => {

	 let phoneList = [];
	 for (let i = 0; i < getList.length; i++) {
			phoneList.push({
				 phone: getList[i].phone_number || ''
			})
	 }

	 return (
			<>
				 {
						phoneList.map((item, index) => {
							 return (
									<div className="footer__block-phone" key={index}>
										 <Link href={`tel:${item.phone}`}>{item.phone}</Link>
									</div>
							 )
						})
				 }
			</>
	 );
};

export default FooterPhone;