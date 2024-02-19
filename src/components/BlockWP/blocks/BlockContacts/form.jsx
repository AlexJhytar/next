"use client"

import React, {useState, useRef} from 'react';
// import '@/contactForm/contact-form.scss'
import Button from "../../../UI/Button";
import {Alert} from "@mui/material";
import {useTimer} from 'react-timer-hook';
import iconCheck from "../../../../../src/img/icons/modal-check.svg";

const BlockForm = ({handler, textButton, checkboxLabel, isSent, hasError, expiryTimestamp}) => {
			const [formState, setFormState] = useState({});
			const [alert, setAlert] = useState(false);
			const error = useRef();
			const [email, setEmail] = useState(false);
			const {t} = useTranslation();
			const [limitText, setLimitText] = useState('');

			const handleFieldChange = (field, e) => {
				 e.target.classList.remove('error');
				 setFormState({
						...formState,
						[field]: e.target.value
				 })
				 setEmail(formState['your-email'])
			}

			function isValidEmail(email) {
				 return /\S+@\S+\.\S+/.test(email);
			}

			const handleCheckboxChange = (checkbox, e) => {
				 let checked = e.target.checked ? e.target.value : "";
				 setFormState({
						...formState,
						[checkbox]: checked
				 })
			}

			// const [checkName, setCheckName] = useState('');
			const [checkMail, setCheckMail] = useState('');
			const [checkTextarea, setCheckTextarea] = useState('');
			const [checkAccess, setCheckAccess] = useState('');
			const form = useRef();
			const inputName = useRef();
			const inputMail = useRef();
			const inputMessage = useRef();
			const inputAccept = useRef();

			const checkForm = () => {
				 // formState['your-name'] === '' || formState['your-name'] === undefined ? setCheckName('error') : setCheckName('');
				 formState['your-email'] === '' || formState['your-email'] === undefined ? setCheckMail('error') :
						isValidEmail(email) !== true ? setCheckMail('wrong-mail') : setCheckMail('')
				 formState['your-message'] === '' || formState['your-message'] === undefined ? setCheckTextarea('error') : setCheckTextarea('');
				 formState['acceptance-168'] === '' || formState['acceptance-168'] === undefined ? setCheckAccess('not-checked') : setCheckAccess('');

				 if (inputMail.current.value !== "" &&
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
						<form action="" ref={form} className="contact-form">
							 <div className={`contact-form_block block-name `}>
									<input type="text" className="contact-form_input"
												 autoComplete="nope"
												 ref={inputName}
												 onChange={(e) => handleFieldChange("your-name", e)}
												 placeholder={t("Name")} />
							 </div>
							 <div
									className={`contact-form_block block-mail ${checkMail} ${hasError ? "animated" : ''}`}>
									<input type="email" className="contact-form_input"
												 autoComplete="nope"
												 ref={inputMail}
												 onChange={(e) => handleFieldChange("your-email", e)}
												 placeholder={t("E-mail") + ' *'} />
							 </div>
							 <div className={`contact-form_block ${checkTextarea} ${hasError ? "animated" : ''}`}>
						<textarea name="" id="" cols="1" className="contact-form_input"
											placeholder={t("Your message") + ' *'}
											ref={inputMessage}
											autoComplete="nope"
											value={limitText}
											onChange={(e) => {
												 handleFieldChange("your-message", e);
												 setLimitText(e.target.value.slice(0, 2000));
											}}
											rows="1" />
							 </div>

							 <div className="contact-form_block">
									<Button
										 type="submit"
										 class="default"
										 color="green"
										 title={textButton}
										 onClick={handleFormSubmit}
									/>
							 </div>

							 <div className="contact-form_block">
									<div className="checkbox-input">
										 <input type="checkbox" id="checkBox_1"
														ref={inputAccept}
														onClick={(e) => handleCheckboxChange("acceptance-168", e)} />
										 <label htmlFor="checkBox_1"
														onClick={(e) => e.target.classList.remove('not-checked')}
														className={`${checkAccess} ${hasError ? "animated" : ''}`}
														dangerouslySetInnerHTML={{__html: checkboxLabel}} />
									</div>
							 </div>
						</form>
				 </>
			);
	 }
;

export default BlockForm;