import axios from "axios";
import { useState } from "react";
import { Link, Router } from "react-router-dom";
import Modal from "../Components/Mytab/Modal";
import "../Containers/scss/LoginForm.scss";

const LoginForm = (props) => {
  const isLoginPage = props.isLoginPage;
  const isSignUpPage = props.isSignUpPage;
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");



  const stateFunction = {
    emailState: (e) => {
      setEmail({
        email: e.target.value,
      });
    },

    nameState: (e) => {
      setNickname({
        nickname: e.target.value,
      });
    },

    pwState: (e) => {
      setPw({
        pw: e.target.value,
      });
    },

    rePwState: (e) => {
      setRePw({
        rePw: e.target.value,
      });
    },
  };

  // element 변수
  const Input = (props) => {
    return <input type={props.type} placeholder={props.placeholder}></input>;
  };

  const Button = () => {
    return <button>test</button>;
  };

  if (isLoginPage) {
    const loginSubmit = (e) => {
      e.preventDefault();

      axios
        .post("login/post", {
          email: email.email,
          pw: pw.pw,
        })
        .then((res) => {
          const { email, nickname } = res.data;
          const user = { email, nickname };
          setUser(user);
          console.log(res);
          console.log("tttt");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <div className="Login">
        <div>
          <div className="LoginForm">
            <div className="logintab">
              <img
                className="loginform-logo"
                src={process.env.PUBLIC_URL + "/DeveluvLogo.png"}
              />
              <h2> Develuv </h2>
            </div>
            <form
              action=""
              method="GET"
              className="input-group"
              onSubmit={loginSubmit}
            >
              <div className="inputWrap">
                <p>Email</p>
                <input
                  type="email"
                  onChange={stateFunction.emailState}
                  placeholder="Your Email"
                  name="email"
                />
                <p>Password</p>
                <input
                  type="password"
                  onChange={stateFunction.pwState}
                  placeholder="password"
                  name="pw"
                />
              </div>
              <Link to="/login/signup">
                <a>아직 회원이 아니신가요?</a>
              </Link>
              <div className="flexCenter">
                <button className="loginBtn" type="submit">
                  Login
                </button>
                <button className="loginBtn" type="submit" id="kakaoBtn">
                  KAKAO 로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (isSignUpPage) {
    const SignupSubmit = (e) => {
      e.preventDefault();

      let check = false;

      if (email === "") {
        alert("이메일이 빈 칸 입니다.");
        check = true;
      }

      if (nickname === "") {
        alert("이름이 빈 칸 입니다.");
        check = true;
      }

      if (pw === "") {
        alert("비밀번호가 빈 칸 입니다.");
        check = true;
      }

      if (pw.pw !== rePw.rePw) {
        alert("비밀번호가 일치하지 않습니다.");
        check = true;
      }

      console.log(pw.pw);
      console.log(rePw.rePw);

      if (check === false) {
        axios
          .post("/login/signup/post", {
            email: email,
            pw: pw,
            nickname: nickname,
          })
          .then((res) => {
            console.log(res);
            alert("회원가입 완료!");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return alert("회원가입에 실패하셨습니다.");
      }
    };

    return (
      <div className="Login">
        <div>
          <div className="LoginForm">
            <div className="logintab">
              <img
                className="loginform-logo"
                src={process.env.PUBLIC_URL + "/DeveluvLogo.png"}
              />
              <h2> Develuv </h2>
            </div>
            <form
              action=""
              method="GET"
              className="input-group"
              onSubmit={SignupSubmit}
            >
              <div className="inputWrap">
                <p>Email</p>
                <input
                  type="email"
                  onChange={stateFunction.emailState}
                  placeholder="Your Email"
                />
                <p>Name</p>
                <input
                  placeholder="Your Nickname"
                  onChange={stateFunction.nameState}
                />
                <p>Password</p>
                <input
                  type="password"
                  onChange={stateFunction.pwState}
                  placeholder="password"
                />
                <p>2nd Password</p>
                <input
                  type="password"
                  onChange={stateFunction.rePwState}
                  placeholder="2nd password"
                />
              </div>
              <div className="flexCenter">
                <button className="loginBtn" type="submit" >
                  Sign Up!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

LoginForm.defaultProps = {
  isLoginPage: false,
  isSignUpPage: false,
};

export default LoginForm;
