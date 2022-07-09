import Policy from "../Components/FaqTab/FaqPolicy";
import Navi from "../Components/Navi";

const Terms = () => {
  return (
    <div>
      <Navi navitext1={'FAQ'} navitext2={'이용가이드'} navitext3={'이용약관'} navitext4={'개인정보처리방침'}/>
      <Policy/>
   
    </div>
  )
}

export default Terms;