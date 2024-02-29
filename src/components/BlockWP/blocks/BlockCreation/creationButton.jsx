"use client";

import React from 'react';
import Button from "@/components/UI/Button";

const CreationButton = ( {text}) => {
  const scroll = () => {
    const section = document.querySelector('#block-contact');
    section.scrollIntoView({block: 'center', inline: "center"});
  };
  
  return (
    <Button
      type="button"
      class="mixed"
      color="green"
      title={text}
      onClick={scroll}
      icon="arrow"/>
  );
};

export default CreationButton;