import Header from "./Header";

const Faq = () => {
  return(
  
    <div className="faq">
      <div className="navimenu">
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
      </div>
      <div>
        <h3>1.구입한 티켓은 어디서 확인하나요?</h3>
        <div>로그인 하신 후 내 티켓 페이지로 들어가시면 구입한 티켓들이 표시됩니다.</div>
      </div>
    </div>
  )
}

export default Faq;