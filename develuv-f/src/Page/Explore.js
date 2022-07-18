import React, { useEffect, useState } from "react";
import axios from "axios";
import EventItem from "../Components/Explore/EventItem";
import EventSearch from "../Components/Explore//EventSearch";
import EventAllbutton from "../Components/Explore/EventAllbutton";

const Explore = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/Explore")
      .then((response) => {
       
        setEventData(response.data);
       
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  //api test
  // useEffect(() => {
  //   console.log(eventData);
  // }, [eventData]);


  const dummyList = [
    {
      board_key: 1,
      user_id: 1,
      title: "이벤트제목입니다.",
      img: "이미지파일",
      email: "kosta@gamil.com",
      content: "아무말이나 일단 적습니다.",
      likes: 1,
      start_date: "2022-07-09T15:00:00.000Z",
      end_date: "2022-07-14T15:00:00.000Z",
      ticket: 10,
      online: 1,
      offline: null,
      address: "서울시 금천구",
      max_number: 10,
      club_status: null,
      tag: "태그는 뭐지?",
    },
    {
      board_key: 2,
      user_id: 2,
      title: "이벤트제목입니다.",
      img: "이미지파일",
      email: "kosta@gamil.com",
      content: "아무말이나 일단 적습니다.",
      likes: 1,
      start_date: "2022-07-09T15:00:00.000Z",
      end_date: "2022-07-14T15:00:00.000Z",
      ticket: 20,
      online: 1,
      offline: null,
      address: "서울시 금천구",
      max_number: 20,
      club_status: null,
      tag: "태그는 뭐지?",
    },
    {
      board_key: 3,
      user_id: 3,
      title: "제목",
      img: "이미지",
      email: "kosta",
      content: "하...",
      likes: 1,
      start_date: "2022-07-14T15:00:00.000Z",
      end_date: "2022-07-19T15:00:00.000Z",
      ticket: 30,
      online: 0,
      offline: null,
      address: "어딘가",
      max_number: 30,
      club_status: 1,
      tag: "???",
    },
    {
      board_key: 4,
      user_id: 4,
      title: "제목4",
      img: "image",
      email: "kosta@gamil.com",
      content: "test",
      likes: 1,
      start_date: "2022-07-15T15:00:00.000Z",
      end_date: "2022-07-22T15:00:00.000Z",
      ticket: 15,
      online: null,
      offline: 1,
      address: "서울",
      max_number: 15,
      club_status: null,
      tag: "1",
    },
  ];

  const eventmenu = [
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
      <EventItem
        eventList={dummyList}
        eventmenu={eventmenu[0].title}
        eventdescript={eventmenu[0].description}
        eventData={eventData}
      />
      <EventItem
        eventList={dummyList}
        eventmenu={eventmenu[1].title}
        eventdescript={eventmenu[1].description}
        eventData={eventData}
      />
      <EventItem
        eventList={dummyList}
        eventmenu={eventmenu[2].title}
        eventdescript={eventmenu[2].description}
        eventData={eventData}
      />
      <EventAllbutton/>
    </div>
  );
};

export default Explore;
