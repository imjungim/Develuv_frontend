import "./scss/QrTicket.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const QrTicket = (props) => {
  // const [modal, setModal] = useState(false);
  // const openCloseModal = () => {
  //   setModal(!modal);
  // };
  // console.log(modal);
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
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
            <main> {props.children} </main>
            큐알코드자리
            <div></div>
            </Modal>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default QrTicket;
