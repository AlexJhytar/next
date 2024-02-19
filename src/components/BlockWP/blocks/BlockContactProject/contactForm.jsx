import React, {useState, useRef} from 'react';
import '../../../contactForm/contact-form.css'
import Button from "../../../UI/Button";
import {Alert} from "@mui/material";
import {useTimer} from 'react-timer-hook';
import {useTranslation} from "react-i18next";
import iconCheck from "../../../../assets/img/icons/modal-check.svg";

const ContactForm = ({handler, buttonText, checkboxLabel, isSent, hasError, expiryTimestamp}) => {
			const [formState, setFormState] = useState({});
			const [alert, setAlert] = useState(false);
			const error = useRef();
			const [email, setEmail] = useState(false);
			const [limitText, setLimitText] = useState('');
			// const [phone, setPhone] = useState(0);
			const {t} = useTranslation();

			const handleFieldChange = (field, e) => {
				 e.target.classList.remove('error');
				 setFormState({
						...formState,
						[field]: e.target.value
				 })
				 setEmail(formState['your-email']);
			}

			function isValidEmail(email) {
				 return /\S+@\S+\.\S+/.test(email);
			}

			// function phoneValidation(phone) {
			// 	 return /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(phone);
			// }

			const handleCheckboxChange = (checkbox, e) => {
				 let checked = e.target.checked ? e.target.value : "";
				 setFormState({
						...formState,
						[checkbox]: checked
				 })
			}

			// const [checkName, setCheckName] = useState('');
			const [checkMail, setCheckMail] = useState('');
			// const [checkPhone, setCheckPhone] = useState('');
			// const [checkWeb, setCheckWeb] = useState('');
			const [checkTextarea, setCheckTextarea] = useState('');
			const [checkAccess, setCheckAccess] = useState('');
			const form = useRef();
			const inputName = useRef();
			const inputMail = useRef();
			const inputPhone = useRef();
			const inputWeb = useRef();
			const inputMessage = useRef();
			const inputAccept = useRef();

			const checkForm = () => {
				 // formState['your-name'] === '' || formState['your-name'] === undefined ? setCheckName('error') : setCheckName('');
				 // formState['your-phone'] === '' || formState['your-phone'] === undefined ? setCheckPhone('error') :
				 // 	phoneValidation(phone) !== true || phone <= 8 ? setCheckPhone('wrong-phone') : setCheckPhone('');
				 // formState['type-website'] === '' || formState['type-website'] === undefined ? setCheckWeb('error') : setCheckWeb('');
				 formState['your-email'] === '' || formState['your-email'] === undefined ? setCheckMail('error') :
						isValidEmail(email) !== true ? setCheckMail('wrong-mail') : setCheckMail('')
				 formState['your-message'] === '' || formState['your-message'] === undefined ? setCheckTextarea('error') : setCheckTextarea('');
				 formState['acceptance-168'] === '' || formState['acceptance-168'] === undefined ? setCheckAccess('not-checked') : setCheckAccess('');

				 if (
						inputMail.current.value !== "" &&
						inputMessage.current.value !== "" &&
						inputAccept.current.checked !== false &&
						isValidEmail(email)) {
						form.current.reset();
						setLimitText('');
						setFormState({});
				 }
			}

			const {restart} = useTimer({expiryTimestamp, onExpire: () => setAlert(false)});

			const checkAlert = () => {
				 setAlert(true);
				 const time = new Date();
				 time.setSeconds(time.getSeconds() + 6);
				 restart(time);
			}

			const handleFormSubmit = async (e) => {
				 e.preventDefault();
				 handler(e, formState);
				 checkForm();
				 setTimeout(function () {
						checkAlert();
				 }, 500)
			}

			return (
				 <>
						{
							 hasError && alert === true ?
									<Alert ref={error} onClose={() => setAlert(false)} severity="error"
												 className={`contact-form_alert ${hasError ? "has-error" : ''}`}>
										 {hasError}
									</Alert> : ''
						}
						{
							 isSent && alert === true ?
									<div className="success-popup">
										 <Alert onClose={() => setAlert(false)} severity="success"
														className={`contact-form_alert ${isSent ? "has-success" : ''}`}>
												<img src={iconCheck} className="icon-thanks" alt="thanks icon" />
												<h3>{isSent}</h3>
										 </Alert>
									</div> : ''
						}
						<form action="" ref={form}
									className="contact-form">
							 <div className={`contact-form_block `}>
									<input type="text" className="contact-form_input"
												 autoComplete="nope"
												 ref={inputName}
												 onChange={(e) => handleFieldChange("your-name", e)}
												 placeholder={t("Name")} />
							 </div>
							 <div className={`contact-form_block ${hasError ? "animated" : ''} ${checkMail}`}>
									<input type="email" className="contact-form_input"
												 autoComplete="nope"
												 ref={inputMail}
												 onChange={(e) => handleFieldChange("your-email", e)}
												 placeholder={t("E-mail") + " *"} />
							 </div>
							 <div className={`contact-form_block`}>
									<input type="tel" className="contact-form_input"
												 ref={inputPhone}
												 autoComplete="nope"
												 onChange={(e) => {
														// setPhone(e.target.value.length)
														handleFieldChange("your-phone", e)
												 }}
												 placeholder={t("Phone number")} />
							 </div>
							 <div className={`contact-form_block `}>
									<input type="text" className="contact-form_input"
												 ref={inputWeb}
												 autoComplete="nope"
												 onChange={(e) => handleFieldChange("type-website", e)}
												 placeholder={t("Type of website")} />
							 </div>
							 <div
									className={`contact-form_block full-size ${hasError ? "animated" : ''} ${checkTextarea}`}>
						<textarea name="" id="" cols="1" className="contact-form_input"
											placeholder={t("Your message") + " *"}
											ref={inputMessage}
											autoComplete="nope"
											value={limitText}
											onChange={(e) => {
												 handleFieldChange("your-message", e);
												 setLimitText(e.target.value.slice(0, 2000));
											}}
											rows="1" />
							 </div>
							 <div className="contact-form_block full-size">
									<div className="checkbox-input">
										 <input type="checkbox" id="checkBox_1"
														ref={inputAccept}
														autoComplete="nope"
														onClick={(e) => handleCheckboxChange("acceptance-168", e)}
										 />
										 <label htmlFor="checkBox_1"
														onClick={(e) => e.target.classList.remove('not-checked')}
														className={`${checkAccess} ${hasError ? "animated" : ''}`}
														dangerouslySetInnerHTML={{__html: checkboxLabel}}
										 >
										 </label>
									</div>
							 </div>

							 <div className="contact-form_block full-size content-right">
									<Button
										 type="submit"
										 class="mixed"
										 color="green"
										 icon="icon-arrow"
										 title={buttonText}
										 onClick={handleFormSubmit}
									/>
							 </div>
						</form>
				 </>
			);
	 }
;

export default ContactForm;