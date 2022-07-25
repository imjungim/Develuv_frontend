import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventLike from "../EventInfo/EventLike";


const MyEvents = ({isSpecial, likeEvent}) => {
  // const dummyEventList= [
  //   {
  //     board_key: 1,
  //     user_id: 1,
  //     title: "이벤트제목입니다.",
  //     img: "이미지파일",
  //     email: "kosta@gamil.com",
  //     content: "아무말이나 일단 적습니다.",
  //     likes: 1,
  //     start_date: "2022-07-09T15:00:00.000Z",
  //     end_date: "2022-07-14T15:00:00.000Z",
  //     onoff: 1,
  //     address: "서울시 금천구",
  //     max_number: 10,
  //     club_status: null,
  //     tag: "태그는 뭐지?",
  //   },
  //   {
  //     board_key: 2,
  //     user_id: 2,
  //     title: "이벤트제목입니다.",
  //     img: "이미지파일",
  //     email: "kosta@gamil.com",
  //     content: "아무말이나 일단 적습니다.",
  //     likes: 1,
  //     start_date: "2022-07-09T15:00:00.000Z",
  //     end_date: "2022-07-14T15:00:00.000Z",
  //     ticket: 20,
  //     onoff:0,
  //     address: "서울시 금천구",
  //     max_number: 20,
  //     club_status: null,
  //     tag: "태그는 뭐지?",
  //   },
  //   {
  //     board_key: 3,
  //     user_id: 3,
  //     title: "제목",
  //     img: "이미지",
  //     email: "kosta",
  //     content: "하...",
  //     likes: 1,
  //     start_date: "2022-07-14T15:00:00.000Z",
  //     end_date: "2022-07-19T15:00:00.000Z",
  //     ticket: 30,
  //     onoff: 0,
  //     address: "어딘가",
  //     max_number: 30,
  //     club_status: 1,
  //     tag: "???",
  //   },
  //   {
  //     board_key: 4,
  //     user_id: 4,
  //     title: "제목4",
  //     img: "image",
  //     email: "kosta@gamil.com",
  //     content: "test",
  //     likes: 1,
  //     start_date: "2022-07-15T15:00:00.000Z",
  //     end_date: "2022-07-22T15:00:00.000Z",
  //     ticket: 15,
  //     onoff: 0,
  //     address: "서울",
  //     max_number: 15,
  //     club_status: null,
  //     tag: "1",
  //   },
  //   {
  //     board_key: 4,
  //     user_id: 4,
  //     title: "제목4",
  //     img: "image",
  //     email: "kosta@gamil.com",
  //     content: "test",
  //     likes: 1,
  //     start_date: "2022-07-15T15:00:00.000Z",
  //     end_date: "2022-07-22T15:00:00.000Z",
  //     ticket: 15,
  //     onoff: 0,
  //     address: "서울",
  //     max_number: 15,
  //     club_status: null,
  //     tag: "1",
  //   },
  //   {
  //     board_key: 4,
  //     user_id: 4,
  //     title: "제목4",
  //     img: "image",
  //     email: "kosta@gamil.com",
  //     content: "test",
  //     likes: 1,
  //     start_date: "2022-07-15T15:00:00.000Z",
  //     end_date: "2022-07-22T15:00:00.000Z",
  //     ticket: 15,
  //     onoff:1,
  //     address: "서울",
  //     max_number: 15,
  //     club_status: null,
  //     tag: "1",
  //   },
  //   {
  //     board_key: 4,
  //     user_id: 4,
  //     title: "제목4",
  //     img: "image",
  //     email: "kosta@gamil.com",
  //     content: "test",
  //     likes: 1,
  //     start_date: "2022-07-15T15:00:00.000Z",
  //     end_date: "2022-07-22T15:00:00.000Z",
  //     ticket: 15,
  //     onoff: 1,
  //     address: "서울",
  //     max_number: 15,
  //     club_status: null,
  //     tag: "1",
  //   },
  //   {
  //     board_key: 4,
  //     user_id: 4,
  //     title: "제목4",
  //     img: "image",
  //     email: "kosta@gamil.com",
  //     content: "test",
  //     likes: 1,
  //     start_date: "2022-07-15T15:00:00.000Z",
  //     end_date: "2022-07-22T15:00:00.000Z",
  //     ticket: 15,
  //     onoff: 0,
  //     address: "서울",
  //     max_number: 15,
  //     club_status: null,
  //     tag: "1",
  //   },
  // ];

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
    {/* <div className="pagination">
    <Page />
    </div> */}
    </div>


  );
};

export default MyEvents;
