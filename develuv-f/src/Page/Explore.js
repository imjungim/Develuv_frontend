import React, { useEffect, useState } from "react";
import axios from "axios";
import EventItem from "../Components/Explore/EventItem";
import EventSearch from "../Components/Explore//EventSearch";
import EventAllbutton from "../Components/Explore/EventAllbutton";
import EventBanner from "../Components/Explore/EventBanner";

const Explore = () => {
  const [eventData, setEventData] = useState([]);
  

  const getData = async () => {
    await axios
      .get("http://localhost:8081/Explore")
      .then((response) => {
        setEventData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("eventData : ", eventData);
  }, [eventData]);

  const eventmenu = [
    {
      title: "최신이벤트",
      description: "최신으로 등록된 이벤트를 만나보세요",
    },
    {
      title: "온라인이벤트",
      description:
        "집에서 안전하게 !어디서나 들을 수 있는 온라인 이벤트를 들으러 오세요.",
    },
    {
      title: "마감임박",
      description: "신청이 곧 마감되는 이벤트들입니다.",
    },
  ];
  const dummyeventData = [
    {
      board_key: 1,
      user_id: 1,
      title: "이벤트제목입니다.",
      img: "이미지파일",
      email: "kosta@gamil.com",
      content: "아무말이나 일단 적습니다.",
      likes: 1,
      start_date: "2022-07-01",
      end_date: "2022-07-15",
      onoff: 1,
      address: "서울시 금천구",
      max_number: 10,
      club_status: null,
      tag: "태그는 뭐지?",
    },
    {
      board_key: 2,
      user_id: 2,
      title: "테스트지롱",
      img: "이미지파일",
      email: "kosta@gamil.com",
      content: "아무말이나 일단 적습니다.",
      likes: 1,
      start_date: "2022-07-09",
      end_date: "2022-07-10",
      ticket: 20,
      onoff:0,
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
      start_date: "2022-07-14",
      end_date: "2022-07-21",
      ticket: 30,
      onoff: 0,
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
      start_date: "2022-07-15",
      end_date: "2022-07-28",
      ticket: 15,
      onoff: 0,
      address: "서울",
      max_number: 15,
      club_status: null,
      tag: "1",
    },
    {
      board_key: 4,
      user_id: 4,
      title: "제목은 무엇",
      img: "image",
      email: "kosta@gamil.com",
      content: "test",
      likes: 1,
      start_date: "2022-07-25",
      end_date: "2022-07-31",
      ticket: 15,
      onoff: 0,
      address: "서울",
      max_number: 15,
      club_status: null,
      tag: "1",
    },
    {
      board_key: 4,
      user_id: 4,
      title: "검색테스트",
      img: "image",
      email: "kosta@gamil.com",
      content: "test",
      likes: 1,
      start_date: "2022-07-07",
      end_date: "2022-07-12",
      ticket: 15,
      onoff:1,
      address: "서울",
      max_number: 15,
      club_status: null,
      tag: "1",
    },
    {
      board_key: 4,
      user_id: 4,
      title: "첫번째 이벤트",
      img: "image",
      email: "kosta@gamil.com",
      content: "test",
      likes: 1,
      start_date: "2022-07-11",
      end_date: "2022-07-24",
      ticket: 15,
      onoff: 1,
      address: "서울",
      max_number: 15,
      club_status: null,
      tag: "1",
    },
    {
      board_key: 4,
      user_id: 4,
      title: "세번째",
      img: "image",
      email: "kosta@gamil.com",
      content: "test",
      likes: 1,
      start_date: "2022-07-27",
      end_date: "2022-08-05",
      ticket: 15,
      onoff: 0,
      address: "서울",
      max_number: 15,
      club_status: null,
      tag: "1",
    },
  ];

  const getLatestevent = (a,b) => {
    const eventA =new Date(a['start_date']).getTime();
    const eventB =new Date(b['start_date']).getTime();
    return eventA < eventB ? 1 : -1;
  };

  const latestEvent = dummyeventData.sort(getLatestevent);
   console.log("latest : ", latestEvent);

  //최신이벤트filter
  // const getLatestevent = (a,b) => {
  //   const eventA =new Date(a['start_date']).getTime();
  //   const eventB =new Date(b['start_date']).getTime();
  //   return eventA < eventB ? 1 : -1;
  // };

  // const latestEvent = eventData.sort(getLatestevent);
  //  console.log("latest : ", latestEvent);


  //eventData 온라인인경우 filter
  const onlinefilter = dummyeventData.filter(it=>it.onoff === 1);
 // console.log("res : " , onlinefilter)

  //eventData 마감임박인 경우 filter
  const getOldEvent = (c,d) => {
    const eventC =new Date(c['end_date']).getTime();
    const eventD =new Date(d['end_date']).getTime();
    return eventC < eventD ? 1 : -1;
  };

  const oldEvent = dummyeventData.sort(getOldEvent);
  console.log("oldEvent : ", oldEvent);

  return (
    <div>
      <EventBanner />
      <EventSearch />
      <EventItem
        eventmenu={eventmenu[0].title}
        eventdescript={eventmenu[0].description}
        dummyeventData={latestEvent}
      />
      <EventItem
        eventmenu={eventmenu[1].title}
        eventdescript={eventmenu[1].description}
        dummyeventData={onlinefilter}
      />
      <EventItem
        eventmenu={eventmenu[2].title}
        eventdescript={eventmenu[2].description}
        dummyeventData={oldEvent}
      />
      <EventAllbutton />
    </div>
  );
};

export default Explore;
