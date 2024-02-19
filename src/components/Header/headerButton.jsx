import React, {useState} from 'react';
import Button from "@/components/UI/Button";

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
			</>
	 );
};

export default HeaderButton;