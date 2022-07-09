import Navi from "../Navi";
import "../../Components/scss/Faq.scss";


const FaqItem = () => {
  return (
    <div className="faq">
      
      <section className="faq-wrap">
        <div className="faq-title">
          <h3>참가자입니다👩🏻‍🦰</h3>
        </div>
        <div className="faq-Q">
          <h3>1.구입한 티켓은 어디서 확인하나요?</h3>
          <p>
            로그인 하신 후 내 티켓 페이지로 들어가시면 구입한 티켓들이
            표시됩니다.
          </p>
        </div>
        <div className="faq-Q">
          <h3>2. 티켓은 언제까지 취소할 수 있나요?</h3>
          <p>
            주최자가 지정한 취소 마감 기한일 이전에는 언제든 취소신청을 할 수
            있습니다...
          </p>
        </div>
        <div className="faq-Q">
          <h3>3. 티켓을 신청했는데 사이트에 접속할 수 없는 상황입니다.</h3>
          <p>
            주최자는 참가자격을 다양한 방법을 통해 확인할 수 있습니다.
            행사장에서 이름, 전화번호 또는 이메일을 얘기하시면 조최자가 해당
            기능을 통해 참가자격을 확일할 것입니다.
          </p>
        </div>
        <div className="faq-Q">
          <h3>4. 티켓을 신청했는데 사이트에 접속할 수 없는 상황입니다.</h3>
          <p>
            주최자는 참가자격을 다양한 방법을 통해 확인할 수 있습니다.
            행사장에서 이름, 전화번호 또는 이메일을 얘기하시면 주최자가 해당
            기능을 통해 참가자격을 확일할 것입니다.
          </p>
        </div>

        <div className="faq-title">
          <h3>주최자입니다😀</h3>
        </div>

        <div className="faq-Q">
          <h3>1. 주최자는 Develuv에서 무엇을 할 수 있나요?</h3>
          <p>다음과 같이 Festa를 이용해보세요.</p>
          <ul>
            <li>
              <p>쉽고 간편하게 이벤트 페이지를 만들 수 있어요.</p>
            </li>
            <li>
              <p>참가자 목록을 사이트에서 조회하고 검색할 수 있어요</p>
            </li>
            <li>
              <p>
                QR스캐너를 띄워서 참가자들이 QR 코드를 직접 찍어 입장할 수
                있어요.
              </p>
            </li>
            <li>
              <p>
                티켓 구입전에 사전질문을 작성하게 하거나, 티켓 수량을 보여줄 수
                있어요.
              </p>
            </li>
          </ul>

          <p>더 좋은 기능들을 계속해서 개발하고 있습니다.</p>
          <div className="faq-Q">
            <h3>2. 참가자가 본인 티켓을 직접 환불 할 수 있나요?</h3>
            <p>
              각 티켓의 환불 마감일 이전에는 참가자가 사이트에서 언제든 직접
              환불할 수 있습니다. 이는 Develuv에서의 운영방침으로서, 주최자가
              참가자의 환불을 금지할 수 없습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqItem;