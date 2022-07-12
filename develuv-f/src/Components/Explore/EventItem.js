import "./EventItem.scss";
import EventLike from "../EventInfo/EventLike";

const EventItem = ({ eventList, eventtype, eventdescript }) => {
  return (
    <div>
      <div id="event-board">
        <div className="new-event">
          <h3>{eventtype}</h3>
          <div>{eventdescript}</div>
        </div>

        <div className="eventList-tabs">
          {eventList.map((it) => (
            <div className="event-box">
              <a href="/eventInfo">
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
    </div>
  );
};

export default EventItem;

//
