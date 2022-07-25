import "../Components/scss/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <ul className="footer-logo">
          <a href="/">
            <li>
              <img src={process.env.PUBLIC_URL + "/DeveluvLogo.png"} />
            </li>
            <li>
              <h2>Develuv</h2>
            </li>
          </a>
        </ul>

        <ul class="team-info">
          <a href="https://github.com/imjungim">
            <li>
              <img src="GitHub-Mark-120px-plus.png" />
            </li>
            <li>
              <spa>홍정임</spa>
            </li>
            <li>
              <span>github.com/imjungim</span>
            </li>
          </a>
        </ul>

        <ul class="team-info">
          <a href="https://github.com/cskdd1270">
            <li>
              <img src="GitHub-Mark-120px-plus.png" />
            </li>
            <li>
              <span>최성현</span>
            </li>
            <li>
              <span>github.com/cskdd1270</span>
            </li>
          </a>
        </ul>

        <ul class="team-info">
          <a href="https://github.com/kimseonghyoek">
            <li>
              <img src="GitHub-Mark-120px-plus.png" />
            </li>
            <li>
              <span>김성혁</span>
            </li>
            <li>
              <span>github.com/kimseonghyoek</span>
            </li>
          </a>
        </ul>
      </div>
      <div className="copyright">
        <span>@Copyright PROJECT DEVELUV All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
