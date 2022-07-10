import "./scss/QrTicket.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
const QrTicket = () => {
  return (
   
      <div className="qr-ticket">
        <div className="qr-content">
          <h3>보유 티켓</h3>
          <div>티켓을 누르면 QR코드 및 상세한 내용을 볼 수 있습니다.</div>
        </div>
        <div className="qr-info">
          <div className="qr-info-text">
          <h3>입장권(오프라인)</h3>
          <p>무료/유료</p>
          </div>
          <div className="qrimage">
          <FontAwesomeIcon icon={faQrcode} />  
          </div>
        </div>
        
      </div>
      
    
  );
};

export default QrTicket;
