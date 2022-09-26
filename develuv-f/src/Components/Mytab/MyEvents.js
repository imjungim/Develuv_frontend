import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventLike from "../EventInfo/EventLike";


const MyEvents = ({isSpecial, likeEvent}) => {
 
  const [eventDataAll, setEventDataAll] = useState([]); //api데이터 state

  const getData = async () => {
    await axios
      .get("/events")
      .then((response) => {
        setEventDataAll(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("eventDataAll : ", eventDataAll);
  }, [eventDataAll]);

  return (
    <div>
    <Container  style={isSpecial ? {width : '1060px' ,paddingLeft : '0px'} : {width : '100%'} }>
      <div className="new-event">
      {likeEvent ? <h3>좋아요한 이벤트</h3> : <h3>이벤트 모두보기</h3>}
      {likeEvent ? null : <div>develuv의 이벤트를 한눈에 볼 수 있습니다.</div>} 
      </div>

      <Row>
        {eventDataAll.map((it) => (
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
                      <div className="event-onoff">{it.onoff === 0 ? "온라인" : "오프라인"}</div>
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

    </div>


  );
};

export default MyEvents;
