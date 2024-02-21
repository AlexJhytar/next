import React, {useState} from 'react';
import Button from "../../UI/Button";
import ContactModal from "../ContactModal";

const HeaderButton = () => {
	 const [show, setShow] = useState(false);
	 return (
			<>
				 <Button
						type="button"
						class="default"
						color="green"
						title="Contact us"
						onClick={() => setShow(true)}
				 />

				 <ContactModal
						modal={show}
						close={(e) => {
							 e.preventDefault();
							 setShow(false);
						}}
				 />
			</>
	 );
};

export default HeaderButton;