const EventItem = () => {
  return (
    <div id="event-board">
      <div className="new-event">
        <h3>최신이벤트</h3>
        <div>최신으로 등록된 이벤트를 만나보세요</div>
      </div>
      <div className="eventList-tabs">
        <div className="event-box">
          <a href="/">
            <div className="event-img">
              <img src={process.env.PUBLIC_URL + "/user.jpg"} />
            </div>
            <div>
              <div className="event-date">22-07-01(금) 온라인</div>
              <div>Node js KOSTA</div>
            </div>
          </a>
        </div>

        <div className="event-box">
          <a href="/">
            <div className="event-img">
              <img src={process.env.PUBLIC_URL + "/user.jpg"} />
            </div>
            <div>
              <div className="event-date">22-07-01(금) 온라인</div>
              <div>Node js KOSTA</div>
            </div>
          </a>
        </div>

        <div className="event-box">
          <a href="/">
            <div className="event-img">
              <img src={process.env.PUBLIC_URL + "/user.jpg"} />
            </div>
            <div>
              <div className="event-date">22-07-01(금) 온라인</div>
              <div>Node js KOSTA</div>
            </div>
          </a>
        </div>
        <div className="event-box">
          <a href="/">
            <div className="event-img">
              <img src={process.env.PUBLIC_URL + "/user.jpg"} />
            </div>
            <div>
              <div className="event-date">22-07-01(금) 온라인</div>
              <div>Node js KOSTA</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventItem;

//
