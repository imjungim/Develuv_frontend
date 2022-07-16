//import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./EventItem.scss";
import EventLike from "../EventInfo/EventLike";

//import React, { useEffect, useState } from "react";

const EventItem = ({ eventList, eventtype, eventdescript, eventData }) => {
  return (
    <Container>
      <Row>
        <div className="new-event">
          <h3>{eventtype}</h3>
          <div>{eventdescript}</div>
        </div>
        {eventList.map((it) => (
          <Col className="item" lg="3" md="6">
            <div className="eventList-tabs">
              <div className="event-box">
                <a href="/events/:id">
                  <div className="event-img">
                    <img src={process.env.PUBLIC_URL + "/user.jpg"} />
                  </div>
                  <div>
                    <div className="event-date">
                      <div>
                        {it.start_date} ~ {it.end_date}
                      </div>
                      <div>{it.online}</div>
                    </div>
                    <div>{it.title}</div>
                  </div>
                </a>
                <div className="like-button">
                  <EventLike />
                </div>
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
