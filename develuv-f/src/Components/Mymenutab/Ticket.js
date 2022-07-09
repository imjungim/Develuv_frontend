import "./scss/Ticket.scss";

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="ticket-wrap">
        <div className="ticket-image">
          <img src={process.env.PUBLIC_URL + "./ticket.jpg"} />
        </div>
        <div className="ticket-content">
          <div className="ticket-title">
            <h2>KOSTA Node js</h2>
            <p>서울 금천구</p>
          </div>

          <div className="ticket-info">
            <div>
              <p>일시</p>
              <p>2022년 07월 09일(토)</p>
              <p>오후 02:00~</p>
            </div>
            <div>
              <p>주최</p>
              <p>KOSTA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
