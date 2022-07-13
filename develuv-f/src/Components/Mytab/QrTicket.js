import "./scss/QrTicket.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const QrTicket = (props) => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
        <React.Fragment>
          <div className="qrimage">
            <button onClick={openModal}>
              <FontAwesomeIcon icon={faQrcode} className="QR-icon" />
            </button>
            <Modal open={modalOpen} close={closeModal} header="이벤트 티켓 QR코드">
              <main> {props.children} </main>
              <div>
                <div className="Qr-code">큐알코드자리</div>
                <div className="Qr-content">
                  <h4>이벤트명</h4>
                  <p>이벤트타입 : 오프라인/온라인</p>
                  <p>ticket ID : 1234</p>
                  <p>구매자 : KIM</p>
                  <p>티켓가격 : 유/무료</p>
                  <p>티켓발행일 : 2022-07-12</p>
                </div>
                <div className="Qr-content">
                  <p>이벤트날짜 : 2022-07-12(화) 09:00~12:00</p>
                  <br />
                  <p>이벤트 장소 : 어딘가에서..</p>
                </div>
              </div>
            </Modal>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default QrTicket;
