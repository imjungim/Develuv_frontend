import React, { useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./EventSearch.scss";

const EventSearch = () => {
  const navigate = useNavigate();
  const textInput = useRef();
  const [state, setState] = useState({
    text: "",
    type: "2",
  });

  const changeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const getSearch = () => {
    navigate(`/search?keyword=${state.text}&type=${state.type}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getSearch();
    }
 
  };

  const handleSubmit = () => {
    if (state.text.length < 1) {
      //focus
      textInput.current.focus();
      return;
    }

    getSearch();
    setState({
      text: "",
      type: "2",
    });
  };

  return (
    <div className="search-tabs">
      <form
        action=""
        method="GET"
        className="search-form"
        onKeyDown={handleKeyPress}
      >
        <div className="search-name">
          <div>검색어</div>
          <input
            ref={textInput}
            name="text"
            onChange={changeState}
            value={state.text}
            placeholder="이벤트제목을 입력하세요"
          />
        </div>
        <div className="search-type">
          <div>이벤트 유형</div>
          <select
            name="type"
            value={state.type}
            className="select-event-type"
            onChange={changeState}
          >
            <option value={2}>전체</option>
            <option value={0}>온라인</option>
            <option value={1}>오프라인</option>
          </select>
        </div>
      </form>
      <div className="search-button">
        <button type="submit" onClick={handleSubmit}>
          검색
        </button>
      </div>
    </div>
  );
};

export default EventSearch;
