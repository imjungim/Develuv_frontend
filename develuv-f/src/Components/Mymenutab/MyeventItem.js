import "./scss/Myevent.scss";

const MyeventItem = () => {
  return (
    <div className="myevent-wrap">
      <div className="myevent-title">
        <h3>이벤트명</h3>
      </div>

      <div className="myevent-info">
        <div className="myevent-description">
          <a href="/">
            <div className="event-image">
            <img src={process.env.PUBLIC_URL + "/user.jpg"} />
            </div>
            <div>
            <p>2022-07-10 오전 12:00</p>
            <p>이벤트설명~</p>
            <p>이벤트명</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyeventItem;
