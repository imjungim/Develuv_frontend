import "../Components/scss/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-logo">
          <ul>
            <div className="logo">
            <li>
              <img src={process.env.PUBLIC_URL + "/DeveluvLogo.png"} />
              <h1>Develuv</h1>
            </li>
            </div>
            <li>
              <p>개발자를 위한 온 오프라인 이벤트 플랫폼</p>
            </li>
          </ul>
        </div>

        <div>
          <ul class="privacy-info">
            <li>
              <a href="#">COMPANY</a>
            </li>
            <li>
              <a href="#">TERM & CONDITIONS</a>
            </li>
            <li>
              <a href="#">PRIVACY PRIVACY</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="info">
            <li>https://github.com/imjungim</li>
            <li>https://github.com/cskdd1270</li>
            <li>https://github.com/kimseonghyoek</li>
          </ul>
        </div>
        <div>
          <ul className="company-info">
            <li>홍정임</li>
            <li>최성현</li>
            <li>김성혁</li>
          </ul>
        </div>
        {/* @Copyright PROJECT TEAM DEVELUV All rights reserved */}
      </div>
    </div>
  );
};

export default Footer;
