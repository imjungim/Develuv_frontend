import Header from "./Header";
import "../Components/scss/EventSearch.scss";

const EventSearch = (text) => {
  return (
    <div className="EventList">
      <div className="banner">
        <img src={process.env.PUBLIC_URL + "/eventItem_banner.png"} />
      </div>
      <section className="searchbar">
        <div className="search-tabs">
          <div className="search-name">
            <form action="" method="GET" className="input-group">
              <div>검색어</div>
              <input
                type="text"
                value=""
                placeholder="이벤트제목을 입력하세요"
              />
            </form>
          </div>
          <div className="search-type">
            <div>이벤트 유형</div>
            <select className="select-event-type">
              <option value="온라인">전체</option>
              <option value="온라인">온라인</option>
              <option value="오프라인">오프라인</option>
            </select>
          </div>
          <div className="search-button">
            <button type="submit">검색</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventSearch;
