import Navi from "../Components/Navi";
import FaqPrivacy from "../Components/FaqTab/FaqPrivacy";

const Privacy = () => {
  return (
    <div>
      <Navi  navitext1={'FAQ'} navitext2={'이용가이드'} navitext3={'이용약관'} navitext4={'개인정보처리방침'}/>
      <FaqPrivacy/>
    </div>
  )
}

export default Privacy;