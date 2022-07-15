//import axios from "axios";
import "./EventItem.scss";
import EventLike from "../EventInfo/EventLike";
//import React, { useEffect, useState } from "react";

const EventItem = ({ eventList, eventtype, eventdescript, eventData }) => {
  // const getEventData = () => {
  //   axios.get('http://localhost:8081/Explore')
  //   .then((response)=> {
  //     setEventData (response.data);
  //     console.log(setEventData)
  //     // console.log(response.data);
  //   })
  //   .catch((Error)=>{console.log(Error)})
  // }
  // getEventData();

  return (
    <div id="event-board">
      <div className="new-event">
        <h3>{eventtype}</h3>
        <div>{eventdescript}</div>
      </div>

      <div className="eventList-tabs">
        {eventList.map((it) => (
          <div className="event-box">
            <a href="/eventInfo">
              <div className="event-img">
                <img src={process.env.PUBLIC_URL + "/user.jpg"} />
              </div>
              <div>
                <div className="event-date">
                  <div>{it.start_date} ~ {it.end_date}</div>
                  <div>{it.online}</div>
                </div>
                <div>{it.title}</div>
              </div>
            </a>

            <div className="like-button">
              {" "}
              <EventLike />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EventItem;

//
