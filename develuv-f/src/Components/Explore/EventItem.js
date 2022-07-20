//import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./EventItem.scss";
import EventLike from "../EventInfo/EventLike";

//import React, { useEffect, useState } from "react";
//eventList props는 더미데이터입니다. eventData
const EventItem = ({ eventList, eventmenu, eventdescript, eventData}) => {
  
  // const eventData = [
  //   {
  //     board_key: 5,
  //     user_id: 5,
  //     title: 'test',
  //     img: 'image',
  //     email: 'kosta@gamil.com',
  //     content: 'test',
  //     start_date: '2022-07-10',
  //     end_date: '2022-07-29',
  //     ticket: 20,
  //     onoff: 1,
  //     address: '서울',
  //     club_status: null,
  //     type: ''
  //   },
  //   {
  //     board_key: 6,
  //     user_id: 6,
  //     title: 'test2',
  //     img: 'image',
  //     email: 'kosta@gamil.com',
  //     content: 'test',
  //     start_date: '2022-07-06',
  //     end_date: '2022-08-10',
  //     ticket: 25,
  //     onoff: 0,
  //     address: '성ㄹ',
  //     club_status: null,
  //     type: ''
  //   },
  //   {
  //     board_key: 7,
  //     user_id: 7,
  //     title: 'test3',
  //     img: 'image',
  //     email: 'kosta@gamil.com',
  //     content: 'test4',
  //     start_date: '2022-07-01',
  //     end_date: '2022-08-01',
  //     ticket: 30,
  //     onoff: 1,
  //     address: '서',
  //     club_status: null,
  //     type: ''
  //   },
  //   {
  //     board_key: 5,
  //     user_id: 5,
  //     title: 'test',
  //     img: 'image',
  //     email: 'kosta@gamil.com',
  //     content: 'test',
  //     start_date: '2022-07-25',
  //     end_date: '2022-07-29',
  //     ticket: 20,
  //     onoff: 1,
  //     address: '서울',
  //     club_status: null,
  //     type: ''
  //   },
  // ]

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
                <a href="/events/:id">
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
                    <EventLike />
                  </div>
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventItem;

//
