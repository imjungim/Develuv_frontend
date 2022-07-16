import React,{useState, useRef} from "react";

import "./EventSearch.scss";

const EventSearch = () => {
  const textInput = useRef();
  const [state, setState] = useState({
    text : "",
    type : "전체",
  });
  console.log(state);

  const changeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    });
  }

  const handleSubmit = () =>{
    if(state.text.length <1 ){
      //focus
      textInput.current.focus();
      return;
    }

    setState({
      text : "",
      type : "전체",
    })
  }

  //검색기능


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
                ref={textInput}
                name="text" 
                onChange={changeState}
                value={state.text}
                placeholder="이벤트제목을 입력하세요"
              />
            </form>
          </div>
          <div className="search-type">
            <div>이벤트 유형</div>
            <select 
              name="type"
              value={state.type} 
              className="select-event-type" 
              onChange={changeState}>
              
              <option value={'전체'}>전체</option>
              <option value={'온라인'}>온라인</option>
              <option value={'오프라인'}>오프라인</option>
            </select>
          </div>
          <div className="search-button">
            <button 
            type="submit"
            onClick={handleSubmit}
            >검색</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventSearch;
