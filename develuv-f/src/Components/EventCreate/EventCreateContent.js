import React from "react";
import './EventCreateContent.scss'

const EventCreateContent = ({ eventArticle, onChange }) => {
    return (
        <div id="createContent" >
            <div id="eventTitle">

                <div className="createTitle">이벤트 제목</div>
                <input name="eventTitle" className="createInput" placeholder="이벤트 제목" value={eventArticle.eventTitle} onChange={onChange} />

                <div className="createTitle">이벤트 기간</div>
                <input name="eventTime" className="createInput" placeholder="이벤트 기간" value={eventArticle.eventTime} onChange={onChange} />
                <div id="uploadIMG">
                    <div className="createTitle">커버 이미지</div>
                    <div id="uploadBox"></div>
                    <input
                        id="uploadImg"
                        type="file"
                        accept='image/*'
                        name="uploadImg"
                    />
                </div>

            </div>
            <div id="eventText">
                <textarea name="eventText" id="createText" placeholder="이벤트 내용" value={eventArticle.event} onChange={onChange} />
            </div>

            <a className="reg" href="/" > 이벤트 주최하기 </a>






        </div>
    )
}

export default EventCreateContent
