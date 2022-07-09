import React from "react";
import Navi from "../Components/Navi";
import Guide from "../Components/FaqTab/Guide";
const Myprofile = () => {
  return (
    <div className="Myprofile">
      <Navi
        navitext1={"내티켓"}
        navitext2={""}
        navitext3={"좋아요한이벤트"}
        navitext4={"프로필설정"}
      />
      <Guide/>
    </div>
  );
};

export default Myprofile;
