import React,{useState} from "react";
import Header from "./Header";
import "../Components/scss/EventSearch.scss";

const EventSearch = () => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
    console.log(text)
  }

  const changeState = (e) => {
    setType(e.target.value);
  }

  return (
    <div className="EventList">
      <div className="banner">
        <img src={process.env.PUBLIC_URL + "/eventItem_banner.png"} />
      </div>
      <section className="searchbar">
        <div className="search-tabs">
          <div className="search-name">
            <form action="" method="GET" className="Search-input">
              <div>검색어</div>
              <input 
                type="text" onChange={onChange}
                value={text}
                placeholder="이벤트제목을 입력하세요"
              />
            </form>
          </div>
          <div className="search-type">
            <div>이벤트 유형</div>
            <select className="select-event-type" onChange={changeState}>
              <option value={type}>전체</option>
              <option value={type}>온라인</option>
              <option value={type}>오프라인</option>
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
