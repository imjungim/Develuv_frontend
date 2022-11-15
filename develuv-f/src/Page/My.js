import React, { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
import Navi from "../Components/Navi";
import MyTicket from "../Components/Mytab/Myticket";

import MyeventItem from "../Components/Mytab/MyeventItem";
import Profileform from "../Components/Mytab/Profileform";

import Unregister from "./Unregister";
import AttendeePage from "./AttendeePage";
import MyLikeEvent from "../Components/Mytab/MyLikeEvent";

const My = () => {
  //url에 른 페이지 전환
  let location = useLocation();
  const [params, setParams] = useState(location.pathname);
  // console.log(params);
  useEffect(() => setParams(location.pathname), [location.pathname]);

  const choosePage = () => {
    switch (params) {
      case "/my/ticket":
        return <MyTicket />;
      case "/my/events":
        return <MyeventItem />;
      case "/my/events/attendee":
        return <AttendeePage />;
      case "/my/likes":
        return <MyLikeEvent />;
      case "/my/profile":
        return <Profileform />;
      case "/unregister":
        return <Unregister />;
      default:
        return <MyTicket />; //default
    }
  };
  //url 변경 props
  const urlPage = {
    page1: "/my/ticket",
    page2: "/my/events",
    page3: "/my/likes",
    page4: "/my/profile",
  };

  const naviMenu = {
    menu1: "내티켓",
    menu2: "주최한이벤트",
    menu3: "좋아요한이벤트",
    menu4: "프로필설정",
  };

  return (
    <div className="my">
      <Navi navimenu={naviMenu} urlpage={urlPage} />

      {choosePage()}
    </div>
  );
};

export default My;
