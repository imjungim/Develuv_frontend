import "../Components/scss/Navi.scss";
import { Link, useLocation } from "react-router-dom";
import React, {useState, useEffect} from "react";

const Navi = ({ navimenu, urlpage}) => {
 console.log(urlpage)
  return (
    <div className="Navi">
      <ul className="navi-tabs">
        <li>
          <Link to={urlpage.page1}>
            <a>{navimenu.menu1}</a>
          </Link>
        </li>
        <li>
          <Link to={urlpage.page2}>
            <a>{navimenu.menu2}</a>
          </Link>
        </li>
        <li>
          <Link to={urlpage.page3}>
            <a>{navimenu.menu3}</a>
          </Link>
        </li>
        <li>
          <Link to={urlpage.page4}>
            <a>{navimenu.menu4}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navi;
