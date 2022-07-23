import "./scss/Profileform.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputEmail from "./InputEmail";

const Profileform = () => {
  const [email, setEmail] = useState("none");
  const [name, setName] = useState("none");
  const [pw, setPw] = useState("none");
  const [rePw, setRePw] = useState("none");
  const [check, setCheck] = useState(true);

  const checkBox = () => {
    setCheck(!check);
  }

  return (
    <div className="profile">
      <section className="profile-info">
        <div className="top_menu">
          <h1>계정 정보</h1>
          <div id="spaceBtnz" className="profile-button">
            <button id="cancelBtn">취소</button>
            <button>저장</button>
          </div>
        </div>
        <hr width="750px" />
        <div className="basic_info">
          <div className="profile-email">
            <h4>이메일</h4>
            <p>{email}</p>
          </div>
          <form name="profile" action="post">
            <div className="profileName">
              <div className="input-name">
                <h4>닉네임</h4>
                <input name="lastName" type="text" value={name} />
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="profile-password">
        <h4>비밀번호 변경</h4>
        <form>
          <div className="password-text">
            <label>새로운 비밀번호</label>
            <input name="newPassword" type="password" value={pw} />
          </div>
          <div className="password-text">
            <label>비밀번호 재입력</label>
            <input name="confirmPassword" type="password" value={rePw} />
          </div>
        </form>
      </section>
      <section className="unregister">
        <div className="unregister">
          <h4>회원탈퇴</h4>
          <div className="check">
            <input type="checkbox" onChange={checkBox} checked={check}></input>
            <p>탈퇴에 동의하시나요?</p>
          </div>
          <InputEmail check={check} email={email}/>
        </div>
      </section>
    </div>
  );
};

export default Profileform;
