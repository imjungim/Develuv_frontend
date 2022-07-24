//import axios from "axios";
import { Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./EventItem.scss";
import EventLike from "../EventInfo/EventLike";

//import React, { useEffect, useState } from "react";
//eventList props는 더미데이터입니다. eventData(Explore - props db)
const EventItem = ({ eventList, eventmenu, eventdescript, eventData }) => {
  
  //sliceData

  const sliceData = eventData.slice(0, 4);
  console.log("sliceData : ", sliceData);

  return (
    <Container>
      <div className="new-event">
        <h3>{eventmenu}</h3>
        <div>{eventdescript}</div>
      </div>
      <Row>
        {sliceData.map((it) => (
          <Col className="item" lg="3" md="6">
            <div className="eventList-tabs">
              <div className="event-box">
                <Link to={`/events/${it.board_key}`}>
                  <div className="event-img">
                    <img src={process.env.PUBLIC_URL + "/user.jpg"} />
                  </div>
                  <div>
                    <div className="event-descript">
                      <div className="event-title">{it.title}</div>
                      <div className="event-date">
                        <div>{it.start_date} ~ </div>
                        <div>{it.end_date}</div>
                      </div>
                      <div className="event-onoff">{it.onoff === 1 ? "온라인" : "오프라인"}</div>
                    </div>
                    <EventLike/>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventItem;

