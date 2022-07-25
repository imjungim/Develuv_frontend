import "./scss/Myevent.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyeventItem = () => {

  const dummyList = [
    {
      id: 1,
      image: "이미지영역",
      date: "2022-07-08(금)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 2,
      image: "이미지영역",
      date: "2022-07-09(토)",
      type: "온라인",
      title: "Node Js KOSTA",
    },]

  return (
    <Container style={ {width : '1060px', height : '100%', paddingLeft : '0px'}}>
    <div className="new-event">
      <h3>주최한 이벤트</h3>
      <div>내가 주최한 이벤트 페이지 입니다.</div>
    </div>

    <Row>
      {dummyList.map((it) => (
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

export default MyeventItem;
