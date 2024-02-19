import React, {memo} from 'react';
// import ContactForm from "./contactForm";
// import Cf7FormWrapper from "../../../contactForm/Cf7FormWrapper";
import './page-contacts.css';

const BlockContactProject = ({getBlock, pageLoaded}) => {
	 const time = new Date();
	 time.setSeconds(time.getSeconds() + 6);

	 return (
			<section className="page-contacts">
				 {
						getBlock.map((item, index) => {
							 return (
									<div className="container" key={index}>
										 <h2 className="page-title"
												 dangerouslySetInnerHTML={{__html: item.title}} />

										 <div data-theme="white" className="block-contact button-right col-2">

												{/*<Cf7FormWrapper formId={item.idForm}>*/}
												{/*	 <ContactForm*/}
												{/*			buttonText={item.buttonText}*/}
												{/*			checkboxLabel={item.checkboxLabel}*/}
												{/*			expiryTimestamp={time} />*/}
												{/*</Cf7FormWrapper>*/}

										 </div>
									</div>
							 )
						})
				 }
			</section>
	 );
}

export default memo(BlockContactProject);