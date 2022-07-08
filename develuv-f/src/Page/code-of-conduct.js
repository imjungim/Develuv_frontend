import Guide from "../Components/FaqTab/Guide";
import Privacy from "../Components/FaqTab/Privacy";
import Navi from "../Components/Navi";

const Codeofconduct = () => {
  return (
    <div>
      <Navi
        navitext1={"FAQ"}
        navitext2={"이용가이드"}
        navitext3={"이용약관"}
        navitext4={"개인정보처리방침"}
      />
  
   <Guide/>
    </div>
  );
};

export default Codeofconduct;
