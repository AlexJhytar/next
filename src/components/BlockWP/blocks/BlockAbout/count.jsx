"use client";
import CountUp from "react-countup";

const Count = ({str}) => {
  let numb = str.replace(/\D/g, '');
  return <CountUp duration={4} enableScrollSpy="true" end={numb}/>
};

export default Count;