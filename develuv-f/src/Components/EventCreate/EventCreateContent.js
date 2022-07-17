import React from "react";
import './EventCreateContent.scss'
import { useState } from 'react';

const EventCreateContent = ({ eventArticle, onChange,setEventArticle,onClick }) => {
    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result)
                setEventArticle({
                    ...eventArticle,
                    titleImg:reader.result
                });
                resolve();
            };
        });
    };
    return (
        <div id="createContent" >
            <div id="eventTitle">

                <div className="createTitle">이벤트 제목</div>
                <input name="eventTitle" className="createInput" placeholder="이벤트 제목" value={eventArticle.eventTitle} onChange={onChange} />

                <div className="createTitle">이벤트 기간</div>
                <input name="eventTime" className="createInput" placeholder="이벤트 기간" value={eventArticle.eventTime} onChange={onChange} />
                <div id="uploadIMG">
                    <div className="createTitle">커버 이미지</div>
                    <div id="uploadBox" style={{ backgroundImage: `url(${imageSrc})`}} > </div>
                    <input
                        id="inputIMG"
                        type="file"
                        accept='image/*'
                        name="titleImg"
                        onChange={(e) => { encodeFileToBase64(e.target.files[0]) }}
                    />
                </div>

            </div>
            <div id="eventText">
                <textarea name="eventText" id="createText" placeholder="이벤트 내용" value={eventArticle.event} onChange={onChange} />
            </div>

            <a className="reg" href="javascript:return false;" onClick={onClick} > 이벤트 주최하기 </a>






        </div>
    )
}

export default EventCreateContent

