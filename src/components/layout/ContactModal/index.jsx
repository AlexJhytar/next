import React, {useRef} from 'react';
import './contact-modal.css'
import Cf7FormWrapper from "../../contactForm/Cf7FormWrapper";
import {CSSTransition} from "react-transition-group";
import i18n from "../../../i18n";
import PopupContacts from "../Footer/popupContacts";

const ContactModal = (props) => {
	 const lang = i18n.language;
	 const time = new Date();
	 time.setSeconds(time.getSeconds() + 6);
	 let infoPopup;

	 let idPage;
	 if (lang === 'en') {
			idPage = 2127;

			infoPopup = {
				 title: 'STAY IN TOUCH <br> <span>WITH US</span>',
				 subtitle: 'Entrust us to your website and see your ideas appear on the screen.',
				 buttonText: 'DISCUSS THE PROJECT',
				 checkboxText: 'I accept the <a href="/terms-conditions" target="_blank">General Term and' +
						' Conditions</a> and confirm that i have read the <a href="/privacy-policy" target="_blank">Privacy' +
						' Policy</a>'
			}
	 }
	 if (lang === 'ua') {
			idPage = 2128;

			infoPopup = {
				 title: 'ЗАЛИШАЙТЕСЯ <span>З НАМИ</span> <br> НА ЗВ\'ЯЗКУ',
				 subtitle: 'Довірте нам свій сайт і побачте, як ваші ідеї оживають на моніторі.',
				 buttonText: 'ОБГОВОРИТИ ПРОЕКТ',
				 checkboxText: 'Я приймаю <a href="/terms-conditions" target="_blank">Загальні положення та умови</a>' +
						' та підтверджую, що ознайомився з <a href="/privacy-policy" target="_blank">Політикою' +
						' конфіденційності</a>'
			}
	 }
	 const nodeRef = useRef();

	 if (props.modal === true) {
			document.body.classList.add('modal-open');
	 } else {
			document.body.classList.remove('modal-open');
	 }

	 return (
			<>
				 <CSSTransition
						in={props.modal}
						nodeRef={nodeRef}
						timeout={700}
						classNames="modal"
						unmountOnExit
						onEnter={() => props.modal === false}
						onExited={() => props.modal === true}
				 >
						<div ref={nodeRef} className={`contact-modal ${props.colorForm}`}>
							 <div className="contact-modal__wrap">
									<div className={'contact-modal__close'}
											 onClick={props.close} />
									<div className="container">
										 <div className={'contact-modal__title'}>
												<h2 dangerouslySetInnerHTML={{__html: infoPopup.title}}/>
										 </div>
										 <div className={'contact-modal__subtitle'}>
												{infoPopup.subtitle}
										 </div>
										 <div data-theme="white" className={'contact-modal__description'}>

												<Cf7FormWrapper formId={idPage}>
													 <PopupContacts
															expiryTimestamp={time}
															buttonText={infoPopup.buttonText}
															labelText={infoPopup.checkboxText}
													 />
												</Cf7FormWrapper>

										 </div>
									</div>
							 </div>
						</div>
				 </CSSTransition>

			</>
	 )
};

export default ContactModal;