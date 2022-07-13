import "../Components/scss/Header.scss";
import React, { useState,useEffect } from "react";
import 'react-router-dom';
import { Link, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  //이벤트 둘러보기 클릭시 변경
  const [eventTitle, setEventTitle] = useState(true);

  const goToEventCreate = () => {
    Navigate('/EventCreate')
  }
  
  const eventTitleChange = () =>{
    setEventTitle('이벤트 주최하기')
    goToEventCreate();
  }

  
  const [loginTitle, setLoginTitle] = useState('로그인')

  const [createEventURL,setcreateEventURL] = useState('/Explore')

  let location = useLocation();

  useEffect(() => {
    if(location.pathname == "/Explore"){
      setEventTitle(false)
      setcreateEventURL('/EventCreate')
    }else{
      setEventTitle(true)
      setcreateEventURL('/Explore')
    }
  }, [ location.pathname ])

  if (location.pathname === '/login') {
    return null;
  }
  return (
    <header className="header">
      <div className="header_contents">
        <div className="header_logo">
          <Link to="/">
            <a href="/">
              <img src={process.env.PUBLIC_URL + "/DeveluvLogo.png"} />
              <h1>Develuv</h1>
            </a>
          </Link>
        </div>

        <div className="menus">
          <ul>
            <li>
              <Link to = {createEventURL}>
                <a href="/" >{eventTitle ? "이벤트 둘러보기" : "이벤트 주최하기"}</a>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <a>로그인</a>
              </Link>
            </li>
            <li>
              <Link to="signup">
                <a href="/">회원가입</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

//회원가입, 로그인, 로그아웃
//로고 -> home으로 이동
//이벤트둘러보기 버튼
//이벤트 주최하기버튼(로그인 후)
