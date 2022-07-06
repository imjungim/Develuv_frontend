import { Link } from "react-router-dom";
import "../Components/scss/LoginForm.scss";
const LoginForm = (props) => {
  return (
    <div className="Login">
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
            <input type="email" placeholder="Your Email" />
            <p>Password</p>
            <input type="password" placeholder="password" />
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
  );
};

export default LoginForm;
