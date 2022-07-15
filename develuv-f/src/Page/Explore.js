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

  // useEffect(() => {
  //   console.log(eventData);
  // }, [eventData]);


  const dummyList = [
    {
      id: 1,
      image: "이미지영역",
      start_date: "2022-07-08(금)",
      end_date : "2022-07-28(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 2,
      image: "이미지영역",
      start_date: "2022-07-08(금)",
      end_date : "2022-07-28(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 3,
      image: "이미지영역",
      start_date: "2022-07-08(금)",
      end_date : "2022-07-28(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 4,
      image: "이미지영역",
      start_date: "2022-07-08(금)",
      end_date : "2022-07-28(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 5,
      image: "이미지영역",
      start_date: "2022-07-08(금)",
      end_date : "2022-07-28(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 6,
      image: "이미지영역",
      start_date: "2022-07-08(금)",
      end_date : "2022-07-28(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 7,
      image: "이미지영역",
      start_date: "2022-07-08(금)",
      end_date : "2022-07-28(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 7,
      image: "이미지영역",
      start_date: "2022-07-08(금)",
      end_date : "2022-07-28(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
  ];

  // const eventmenu = [
  //   {
  //     title: "최신이벤트",
  //     description: "최신으로 등록된 이벤트를 만나보세요",
  //   },
  //   {
  //     title : "온라인이벤트",
  //     description : "집에서 안전하게 !어디서나 들을 수 있는 온라인 이벤트를 들으러 오세요.",
  //   },
  //   {
  //     title : "마감임박",
  //     description : "신청이 곧 마감되는 이벤트들입니다.",
  //   }
  // ];

  return (
    <div>
      <EventSearch />
      <EventItem
        eventList={dummyList}
        eventtype={"최신이벤트"}
        eventdescript={"등록된지 얼마 안된 이벤트를 만나보세요!"}
        eventData={eventData}
      />
      <EventItem
        eventList={dummyList}
        eventtype={"온라인이벤트"}
        eventdescript={"집에서 안전하게 어디서나 들을 수 있는 온라인 이벤트!"}
        eventData={eventData}
      />
      <EventItem
        eventList={dummyList}
        eventtype={"마감임박"}
        eventdescript={"집에서 안전하게 어디서나 들을 수 있는 온라인 이벤트!"}
        eventData={eventData}
      />
      <EventAllbutton/>
    </div>
  );
};

export default Explore;
