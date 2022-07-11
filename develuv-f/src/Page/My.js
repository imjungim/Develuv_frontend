import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navi from "../Components/Navi";
import MyTicket from "../Components/Mytab/Myticket";
import QrTicket from "../Components/Mytab/QrTicket";
import MyeventItem from "../Components/Mytab/MyeventItem";
import Profileform from "../Components/Mytab/Profileform";
import EventItem from "../Components/Explore/EventItem";
import Unregister from "./Unregister";
import AttendeePage from "./AttendeePage";
import LikeEvent from "../Components/Mytab/LikeEvent";

const My = () => {
  const dummyList = [
    {
      id: 1,
      image: "이미지영역",
      date: "2022-07-08(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 2,
      image: "이미지영역",
      date: "2022-07-09(토)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 3,
      image: "이미지영역",
      date: "2022-07-10(일)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 4,
      image: "이미지영역",
      date: "2022-07-11(월)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
  ];

  let location = useLocation();
  const [params, setParams] = useState(location.pathname);
  console.log(params);
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
        return <LikeEvent />;
      case "/my/profile":
        return <Profileform/>;
      case "/unregister":
        return <Unregister />;
      default:
        return <MyTicket/>;
    }
  };
  return (
    <div className="my">
      <Navi
        navitext1={"내티켓"}
        navitext2={"주최한이벤트"}
        navitext3={"좋아요한이벤트"}
        navitext4={"프로필설정"}
      />
{choosePage()}
    </div>
  );
};

export default My;
