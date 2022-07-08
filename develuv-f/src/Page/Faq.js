import React, {useState} from "react";
import Navi from "../Components/Navi";
import FaqItem from "../Components/FaqTab/FaqItem";
import Policy from "../Components/FaqTab/Policy";
import Privacy from "../Components/FaqTab/Privacy";


const Faq = () => {
  

  return (
    <div>
  <Navi navitext1={'FAQ'} navitext2={'이용가이드'} navitext3={'이용약관'} navitext4={'개인정보처리방침'}/>
  <FaqItem/>

    </div>
  )
};

export default Faq;
