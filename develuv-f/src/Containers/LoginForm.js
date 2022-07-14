import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Components/Mytab/Modal";
import "../Containers/scss/LoginForm.scss";

const LoginForm = (props) => {
  const isLoginPage = props.isLoginPage;
  const isSignUpPage = props.isSignUpPage;

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  // const [modal, setModal] = useState(false);

  // const modalState = {
  //   openModal: setModal(true),
  //   closeModal: setModal(false)
  // }

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
            <form action="" method="GET" className="input-group">
              <div className="inputWrap">
                <p>Email</p>
                <input
                  type="email"
                  onChange={stateFunction.emailState}
                  placeholder="Your Email"
                />
                <p>Password</p>
                <input
                  type="password"
                  onChange={stateFunction.pwState}
                  placeholder="password"
                />
              </div>
              <Link to="/login/signup">
                <a>아직 회원이 아니신가요?</a>
              </Link>
              <div className="flexCenter">
                <button className="loginBtn" type="submit">
                  Subscribe
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

    const validation = (name, pw, rePw) => {
      
      if(name === '') {
        alert('이름이 빈 칸 입니다.')
      }

      if(pw === '') {
        alert('비밀번호가 빈 칸 입니다.')
      }
      
      if(pw !== rePw) {
        alert('비밀번호가 일치하지 않습니다.')
      }
    }

    const SignupSubmit = (e) => {
      e.preventDefault();
      validation(pw, rePw);
      axios.post('/login/signup/post', {
        email: email,
        pw: pw,
        nickname: nickname
      }).then((res) => {
        <Link to="login"/>
        console.log(res);
        alert('회원가입 완료!');
      }).catch((err) => {
        console.log(err)
      })
    }

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
            <form action="" method="GET" className="input-group" onSubmit={SignupSubmit}>
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
                <button className="loginBtn" type="submit">
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
