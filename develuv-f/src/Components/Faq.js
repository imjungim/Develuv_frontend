import "../Components/scss/Faq.scss";
import Header from "./Header";

const Faq = () => {
  return(
  
    <div className="faq">
      <section className="navimenu">
        <ul className="navi-tabs">
          <li>
            <a href='/'>FAQ</a>
          </li>
          <li>
            <a href='/'>이용가이드</a>
          </li>
          <li>
            <a href='/'>이용약관</a>
          </li>
          <li>
            <a href='/'>개인정보처리방침</a>
          </li>
        </ul>
      </section>
      <section>
      <div>
        <h3>참가자입니다</h3>
      </div>
      <div>
        <h3>1.구입한 티켓은 어디서 확인하나요?</h3>
        <p>로그인 하신 후 내 티켓 페이지로 들어가시면 구입한 티켓들이 표시됩니다.</p>
      </div>
      <div>
        <h3>2. 티켓은 언제까지 취소할 수 있나요?</h3>
        <p>주최자가 지정한 취소 마감 기한일 이전에는 언제든 취소신청을 할 수 있습니다...</p>
      </div>
      <div>
        <h3>3. 티켓을 신청했는데 사이트에 접속할 수 없는 상황입니다.</h3>
        <p>주최자는 참가자격을 다양한 방법을 통해 확인할 수 있습니다. 행사장에서 이름, 전화번호 또는 이메일을 얘기하시면 조최자가 해당 기능을 통해 참가자격을 확일할 것입니다.</p>
      </div>
      <div>
        <h3>. 티켓을 신청했는데 사이트에 접속할 수 없는 상황입니다.</h3>
        <p>주최자는 참가자격을 다양한 방법을 통해 확인할 수 있습니다. 행사장에서 이름, 전화번호 또는 이메일을 얘기하시면 조최자가 해당 기능을 통해 참가자격을 확일할 것입니다.</p>
      </div>

      <div>
        <h3>주최자입니다.</h3>
      </div>
      <div>
        <h3>주최자는 Develuv에서 무엇을 할 수 있나요?</h3>
        <p>주최자는 참가자격을 다양한 방법을 통해 확인할 수 있습니다. 행사장에서 이름, 전화번호 또는 이메일을 얘기하시면 조최자가 해당 기능을 통해 참가자격을 확일할 것입니다.</p>
      </div>
      </section>


    </div>
  )
}

export default Faq;