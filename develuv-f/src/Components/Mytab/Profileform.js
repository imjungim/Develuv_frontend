import "./scss/Profileform.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import InputEmail from "./InputEmail";
import axios from "axios";

const Profileform = () => {

  const [email, setEmail] = useState("none");
  const [name, setName] = useState("none");
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [check, setCheck] = useState(false);

  let data = {};

  const stateFun = {
    nameState: (e) =>  setName(e.target.value),
    pwState: (e) => setPw(e.target.value),
    rePwState: (e) => setRePw(e.target.value),
  }

  const checkBox = () => {
    setCheck(!check);
  };

  const Save = () => {};

  useEffect(() => {
    console.log("=========================useEffect===========================")
    axios.get("/my/profile/get")
    .then(res => {
      data = res.data;
      setEmail({
        email: data[0].email,
      })
      setName({
        name: data[0].nickname,
      })
      console.log(data[0].user_id);
      console.log(data[0].email);
      console.log(data[0].nickname);
      console.log(data[0].pw);
    })
    .catch((err) => {
      alert(err);
      console.log(err);
    });
  }, [])

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
            {/* <p>{JSON.stringify(data[0].email)}</p> */}
            <p>{email.email}</p>
          </div>
          <form name="profile" action="post">
            <div className="profileName">
              <div className="input-name">
                <h4>닉네임</h4>
                <input name="lastName" type="text" value={name.name}  onChange={stateFun.nameState}/>
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
            <input name="newPassword" type="password" onChange={stateFun.pwState} />
          </div>
          <div className="password-text">
            <label>비밀번호 재입력</label>
            <input name="confirmPassword" type="password" onChange={stateFun.rePwState} />
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
          <InputEmail check={check} email={email.email} />
        </div>
      </section>
    </div>
  );
};

export default Profileform;
