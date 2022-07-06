import "../Components/scss/Policy.scss";
import Navi from "./Navi";

const Policy = () => {
  return (
    <div className="Policy">
      <Navi/>
      <div className="policy-wrap">
      <div className="policy-contents">
        <h1>제 1 조 목적</h1>
        <p>본 약관은 주식회사 페스타 (Festa inc.) (이하 '회사')에서 제공하는 모든 제품 및 서비스(이하 '본 서비스')의 이용에 관하여 회사와 본 서비스의 회원 또는 비회원과의 관계를 설명하는 것에 목적이 있습니다. 본 서비스를 이용하거나 회원가입을 통해 본 서비스의 회원이 될 경우 본 약관 및 관련 운영 정책을 동의하신 것으로 봅니다.</p>
      </div>
      <div className="policy-contents">
        <h1>제 2 조 용어 정의</h1>
        <p>1. 이벤트 - 행사, 컨퍼런스, 콘서트, 전시회 등의 모임에 참가자를 모집하기 위한 목적으로 페스타 서비스에 생성하는 콘텐츠를 말합니다.</p>
        <p>2. 주최자 - 페스타 서비스에서 이벤트를 생성하여 다른 여러 회원의 참가신청을 받는 회원을 말합니다.</p>
        <p>3. 참가자 - 페스타 서비스의 이벤트에 티켓 결제 등의 방법으로 참가 신청을 하는 회원을 말합니다.</p>
        <p>4. 사용자 생성 콘텐츠 - 회원이 직접 본 서비스에서 생성한 댓글, 게시글 (이벤트 포함) 등의 콘텐츠를 말합니다.</p>
      </div>
      <div className="policy-contents">
        <h1>제 3 조 약관 동의</h1>
        <p>1. 회원은 본 약관의 규정에 따라 본 서비스를 이용해야 합니다.</p>
        <p>2. 회원이 미성년자일 경우에는 친권자 등 법정대리인의 동의를 얻은 후 본 서비스를 이용해야 합니다.</p>
        <p>3. 회원이 본 서비스를 사업자를 위해 이용할 경우에는 해당 사업자 역시 본 약관에 동의한 후 서비스를 이용해야 합니다.</p>
        <p>4. 회사는 개별 서비스에 대해서는 별도의 이용약관 및 정책 (개별약관)을 둘 수 있으며, 해당 내용이 이 약관과 상충할 경우에는 개별약관을 우선하여 적용합니다.</p>
      </div>

      <div className="policy-contents">
        <h1>제 4 조 약관 변경</h1>
        <p>1. 회사에서 필요하다고 판단할 경우,회원에 대한 사전 통지 없이 언제라도 본 약관 및 개별 이용약관을 변경할 수 있습니다. 변경 후의 본 약관 및 개별 이용약관은 회사가 운영하는 웹사이트 내의 적절한 장소에 게시된 시점부터 그 효력이 발생하며, 본 약관 및 개별 이용약관이 변경된 후에도 회원이 본 서비스를 계속 이용함으로써 변경 후의 본 약관 및 적용된 개별 이용약관에 대해 유효하고 취소 불가능한 동의를 한 것으로 간주됩니다. 이러한 변경 내용은 회원에게 개별적으로 통지할 수 없기 때문에, 본 서비스를 이용할 때에는 수시로 최신의 본 약관 및 적용된 개별 이용약관을 참조하시기 바랍니다.</p>
        <p>2. 회원이 변경된 약관에 관하여 동의하지 못할 경우 회사는 회원에게 변경된 약관을 강제로 적용하지 않습니다. 다만 회원은 변경된 약관에 대한 동의없이 본 서비스를 이용할 수 없다는 것을 인지해야 합니다. 회원은 언제든지 회원탈퇴 신청을 통해 자유롭게 서비스 이용계약 해지가 가능합니다.</p>
      </div>
      </div>
    </div>
  )
}

export default Policy;