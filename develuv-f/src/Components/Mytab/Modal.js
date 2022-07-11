import "./scss/Modal.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

// const Modal = (modal) => {

//   return (
//     <div className="modal">
//       {modal ? 
//         <div>
//           <h1>모달</h1>
//         </div>
//        : null}
//     </div>
//   )
// };

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}
          <div className="test"></div>
          </main>

        </section>
      ) : null}
    </div>
  );
};


export default Modal;
