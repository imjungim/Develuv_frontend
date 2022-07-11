import React from "react";
import EventItem from "../Components/Explore/EventItem";
import EventSearch from "../Components/Explore//EventSearch";


const Explore = ({ navitext1, navitext2, navitext3, navitext4 }) => {
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

  const eventItem = [
    {
      title: "최신이벤트",
      description: "최신으로 등록된 이벤트를 만나보세요",
    },
    {
      title : "온라인이벤트",
      description : "집에서 안전하게 !어디서나 들을 수 있는 온라인 이벤트를 들으러 오세요.",
    },
    {
      title : "마감임박",
      description : "신청이 곧 마감되는 이벤트들입니다.",
    }
  ];

  return (
    <div>
      <EventSearch />
      <EventItem eventList={dummyList} eventtype={"최신이벤트"} eventdescript={"등록된지 얼마 안된 이벤트를 만나보세요!"}/>
      <EventItem eventList={dummyList} eventtype={"온라인이벤트"} eventdescript={"집에서 안전하게 어디서나 들을 수 있는 온라인 이벤트!"}/>
      <EventItem eventList={dummyList} eventtype={"마감임박"}  eventdescript={"집에서 안전하게 어디서나 들을 수 있는 온라인 이벤트!"}/>
    </div>
  );
};

export default Explore;
