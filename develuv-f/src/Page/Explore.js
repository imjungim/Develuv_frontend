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
      .get("/Explore")
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
  

// 최신이벤트filter
  const getLatestevent = (a,b) => {
    const eventA =new Date(a['start_date']).getTime();
    const eventB =new Date(b['start_date']).getTime();
    return eventA < eventB ? 1 : -1;
  };
  const latestData = [...eventData];
//  console.log("latestData :", latestData);
  const latestEvent = latestData.sort(getLatestevent);
 // console.log("latest : ", latestEvent);

  //eventData 온라인인경우 filter
  const onlineData = [...eventData]
  const onlinefilter = onlineData.filter(it=>it.onoff === 1);
  console.log("res : " , onlinefilter)

  //eventData 마감임박인 경우 filter
  const getOldEvent = (a,b) => {
    const eventA =new Date(a['end_date']).getTime();
    const eventB =new Date(b['end_date']).getTime();
    return eventA > eventB ? 1 : -1;
  };

  const oldData = [...eventData];
//  console.log("oldData :", oldData);
  const oldEvent = oldData.sort(getOldEvent);
 // console.log("oldEvent : ", oldEvent);


  return (
    <div style={{Width : '100%'}}>
      <EventBanner />
      <EventSearch />
      <EventItem
        eventmenu={eventmenu[0].title}
        eventdescript={eventmenu[0].description}
        eventData={latestEvent}
      />
      <EventItem
        eventmenu={eventmenu[1].title}
        eventdescript={eventmenu[1].description}
        eventData={onlinefilter}
      />
      <EventItem
        eventmenu={eventmenu[2].title}
        eventdescript={eventmenu[2].description}
        eventData={oldEvent}
      />
      <EventAllbutton />
    </div>
  );
};

export default Explore;
