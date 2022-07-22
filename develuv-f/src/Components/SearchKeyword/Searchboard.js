import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Searchboard = ({searchData}) => {

  return (
    <Container>
      <div className="new-event">
        <h3>이벤트 검색결과</h3>
        <div>develuv이벤트 검색결과입니다.</div>
      </div>

      <Row>
        {searchData.map((it) => (
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

export default Searchboard;
