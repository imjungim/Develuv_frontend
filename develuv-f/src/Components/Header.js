import "../Components/scss/Header.scss";
import React, { createContext,useState,useEffect } from "react";
import 'react-router-dom';
import { Link, Navigate, useLocation } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
// import {Cookies} from 'react-cookie'

const Header = ({userData}) => {
  //이벤트 둘러보기 클릭시 변경
  const [eventTitle, setEventTitle] = useState(true);
  const [loginTitle, setLoginTitle] = useState("로그인");
  const [signupChange, setSignupChange] = useState("회원가입")
  console.log("userData :",userData) //loginForm에서 부터 전달받은 user(id,nickname)값입니다. (LoginForm > Login > App -> Header)
  const goToEventCreate = () => {
    Navigate('/EventCreate')
  }

  //user 객체를 props로 잘 받아와지는지 먼저 확인 하세요.
  // useEffect(()=>{
  //   if(userData) {
  //     // 헤더내용 프로필/로그아웃
  //      setLoginTitle("로그아웃")
  //      setSignupChange("회원가입")
  //   } else {
  //     // 헤더내용 로그인/회원가입
  //     setLoginTitle("로그인")
  //     setSignupChange("프로필")
  //   }
  // },[userData])
  
  // const eventTitleChange = () =>{
  //   setEventTitle('이벤트 주최하기')
  //   goToEventCreate();
  // }

  const [createEventURL,setcreateEventURL] = useState('/Explore')

  let location = useLocation();

  useEffect(() => {
    if(location.pathname === "/Explore"){
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
                <a onClick={()=>setLoginTitle("로그아웃")}>{loginTitle}</a>
              </Link>
            </li>
            <li>
              <Link to="/login/signup">
                <a >{signupChange}</a>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <a href="/">FAQ</a>
              </Link>
            </li>
            <li>
              <Link to="/my/events">
                <a href="/">Myprofile</a>
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
