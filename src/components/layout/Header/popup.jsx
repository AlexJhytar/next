"use client";

import React, { useState } from 'react';
import Modal from "@/components/layout/modal";
import Button from "@/components/UI/Button";
import { useTranslations } from "next-intl";

const Popup = () => {
  const t = useTranslations("Menu")
  const [state, setState] = useState(false);
  let handleAction = () => {
    setState(prevCheck => !prevCheck);
  }
  
  //console.log(state)
  
  return (
    <>
      <Button
        type="button"
        class="default"
        color="green"
        onClick={handleAction}
        title={t("Contacts")}
      />
      
      <Modal isOpen={state} />
    </>
  );
};

export default Popup;