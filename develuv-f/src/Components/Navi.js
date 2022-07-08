import "../Components/scss/Navi.scss";
import { Link } from "react-router-dom";

const Navi = ({navitext1, navitext2, navitext3, navitext4}) => {
  return (
    <div className="Navi">
    <ul className="navi-tabs">
      <li>
        <Link to="/faq">
          <a href="/">{navitext1}</a>
        </Link>
      </li>
      <li>
        <Link to="/code-of-conduct">
          <a href="/">{navitext2}</a>
        </Link>
      </li>
      <li>
        <Link to="/terms">
          <a href="/">{navitext3}</a>
        </Link>
      </li>
      <li>
        <Link to="/privacy">
          <a href="/">{navitext4}</a>
        </Link>
      </li>
    </ul>
  </div>
  );
};

export default Navi;
