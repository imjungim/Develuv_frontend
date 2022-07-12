import "./scss/Myevent.scss";
import EventLike from "../EventInfo/EventLike";

const MyLikeEvent = () => {

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
    },
    {
      id: 3,
      image: "이미지영역",
      date: "2022-07-10(일)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
    {
      id: 4,
      image: "이미지영역",
      date: "2022-07-11(월)",
      type: "온라인",
      title: "Node Js KOSTA",
    },
  ];

  const eventItem = [
    {
      title: "최신이벤트",
      description: "최신으로 등록된 이벤트를 만나보세요",
    },
    {
      title : "온라인이벤트",
      description : "집에서 안전하게 !어디서나 들을 수 있는 온라인 이벤트를 들으러 오세요.",
    },
    {
      title : "마감임박",
      description : "신청이 곧 마감되는 이벤트들입니다.",
    }
  ];


  return (
    <div id="event-board">
    <div className="new-event">
      <h3>좋아요 한 이벤트</h3>
      <div>좋아요를 누른 이벤트입니다.</div>
    </div>

    <div className="eventList-tabs">
      {dummyList.map((it) => (
        <div className="event-box">
          <a href="/">
            <div className="event-img">
              <img src={process.env.PUBLIC_URL + "/user.jpg"} />
            </div>
            <div>
              <div className="event-date">
                {it.date} {it.type}
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
  )
}

export default MyLikeEvent;