import React from "react";
import './EventCreateContent.scss'

const EventCreateContent = ({ eventArticle, onChange }) => {
    return (
        <div id="createContent" >
            <div id="eventTitle">
                
                <div id="createTitle">이벤트 제목</div>
                <input name="eventTitle" id="createInput" placeholder="이벤트 제목" value={eventArticle.eventTitle} onChange={onChange} />
                
                <div id="createTitle">이벤트 기간</div>
                <input name="eventTime" id="createInput" placeholder="이벤트 기간" value={eventArticle.eventTime} onChange={onChange} />
                
            </div>
            <div id="eventText">
                <textarea name="eventText" id="createText" placeholder="이벤트 내용" value={eventArticle.event} onChange={onChange} />
            </div>
       
            <a className="reg" href="/" > 이벤트 주최하기 </a>
          
        </div>
    )
}

export default EventCreateContent