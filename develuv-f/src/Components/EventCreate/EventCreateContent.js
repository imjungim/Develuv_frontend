import React from "react";
import './EventCreateContent.scss'
import { useState, useEffect } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { ko } from 'date-fns/esm/locale'
import { MdKeyboardArrowRight } from "react-icons/md";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes"
import Iframe from 'react-iframe'
const EventCreateContent = ({ eventArticle, onChange, setEventArticle, onClick , changeKRTime,imageRef}) => {
    const [imageSrc, setImageSrc] = useState('');
    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date().setDate(new Date().getDate() + 1), 30), 9))
    const [endDate, setEndDate] = useState(null)

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result)
                resolve();
            };
        });
    }

    useEffect(() => {
        setEventArticle({
            ...eventArticle,
            start_date: changeKRTime(startDate),
            end_date: changeKRTime(endDate)
        })

    }, [startDate,endDate]);


    return (
        <div id="createContent" >


            <form target="iframe1" id="createForm">
                <div id="eventTitle">

                    <div className="createTitle">이벤트 제목</div>
                    <input name="title" className="createInput" placeholder="이벤트 제목" value={eventArticle.title} onChange={onChange} />

                    <div className="createTitle">이벤트 기간</div>
                    <div className="dateBox">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                                setEndDate(null)
                                return setStartDate(date)
                            }}
                            selectsStart
                            startDate={startDate}
                            minDate={setHours(setMinutes(new Date().setDate(new Date().getDate() + 1), 30), 9)}
                            maxDate={new Date("2023-01-01T00:00:00")}
                            endDate={endDate}
                            locale={ko}
                            placeholderText="시작 날짜"
                            dateFormat="yyyy년 MM월 dd일 aa h:mm"
                            className="calendar"
                            showTimeSelect
                            timeIntervals={30}
                        />
                        
                        <MdKeyboardArrowRight size="40" width="40" height="40" overflow="visible" viewBox="3 -2 24 24" />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            locale={ko}
                            placeholderText="종료 날짜"
                            dateFormat="yyyy년 MM월 dd일 aa h:mm"
                            className="calendar"
                            showTimeSelect
                            timeCaption="Time"
                        />
                    </div>
                    <div id="uploadIMG">
                        <div className="createTitle">커버 이미지</div>
                        <div id="uploadBox" style={{ backgroundImage: `url(${imageSrc})` }} > </div>
                        <input
                            id="inputIMG"
                            type="file"
                            accept='image/*'
                            name="image"
                            onChange={(e) => { encodeFileToBase64(e.target.files[0]) }}
                            ref={(el)=> (imageRef.current[0] = el)}
                        />
                    </div>
                </div>
                <div id="eventText" >
                    <textarea name="content" id="createText" placeholder="이벤트 내용" value={eventArticle.content} onChange={onChange} />
                </div>
                <input
                    type="file"
                    accept='image/*'
                    name="image" 
                    ref={(el)=> (imageRef.current[1] = el)}/>
                <button className="reg" onClick={onClick} type="submit">이벤트 주최하기</button>
                {/* <button onClick={()=>{console.log(changeKRTime(startDate))}} type="button">asd </button> */}
            </form>
        
            <Iframe name="iframe1" style="display:none"/>
        </div>
    )
}

export default EventCreateContent
