import "../Components/scss/LoginForm.scss";
const LoginForm = () => {
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
          <p>Email</p>
          <input type="email" placeholder="Your Email" />
          <p>Password</p>
          <input type="password" placeholder="password" />
          <button type="submit">Subscribe</button>
       
          <img
            className="kakaoLogin-button"
            src={process.env.PUBLIC_URL + "/kakao_login.png"}
          />

        </form>
      </div>
    </div>
  );
};

export default LoginForm;
