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
                console.log(reader)
                setEventArticle({
                    ...eventArticle,
                    img:reader.result
                });
                resolve();
            };
        });
    };
    return (
        <div id="createContent" >
            <div id="eventTitle">

                <div className="createTitle">이벤트 제목</div>
                <input name="title" className="createInput" placeholder="이벤트 제목" value={eventArticle.title} onChange={onChange} />

                <div className="createTitle">이벤트 기간</div>
                <input name="end_date" className="createInput" placeholder="이벤트 기간" value={eventArticle.end_time} onChange={onChange} />
                <div id="uploadIMG">
                    <div className="createTitle">커버 이미지</div>
                    <div id="uploadBox" style={{ backgroundImage: `url(${imageSrc})`}} > </div>
                    <input
                        id="inputIMG"
                        type="file"
                        accept='image/*'
                        name="img"
                        onChange={(e) => { encodeFileToBase64(e.target.files[0]) }}
                    />
                </div>
 
            </div>
            <div id="eventText" >
                <textarea name="content" id="createText" placeholder="이벤트 내용" value={eventArticle.content} onChange={onChange} />
            </div>

            <a className="reg" href="javascript:return false;" onClick={onClick} > 이벤트 주최하기 </a>

        </div>
    )
}

export default EventCreateContent

