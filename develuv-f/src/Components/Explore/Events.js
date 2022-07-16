import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Events.scss";

const Events = () => {
  return (
    <Container>
      <div className="new-event">
        <h3>이벤트 모두보기</h3>
        <div>develuv의 이벤트를 한눈에 볼 수 있습니다.</div>
      </div>
      <Row>
        <Col className="item" lg="3" md="6">
          <div className="eventList-tabs">
            <div className="event-box">
              <a href="/events/:id">
                <div className="event-img">
                  <img src={process.env.PUBLIC_URL + "/user.jpg"} />
                </div>
                <div>
                  <div className="event-date">
                    <div>이벤트기간</div>
                    <div>온라인/오프라인</div>
                  </div>
                  <div>이벤트제목</div>
                </div>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
