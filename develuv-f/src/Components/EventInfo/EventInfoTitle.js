import React from "react";
import './EventInfoTitle.scss'
import EventLike from './EventLike'

export default function EventInfoTitle({ post }) {
    const { user_id, title, content, start_date, end_date,
        ticket, onoff, address, club_status, type, image_id } = post
    const imageArray = image_id.split('.')
    console.log(imageArray)
    return (
        <div className="EventInfoTitle">
            <div className="imgBox" style={{ backgroundImage: `url(http://localhost:80/event1/${imageArray[0]})` }} />
            <div className="title">
                <h1>{title}</h1>
                일시
                <div className="titleLi">
                    {start_date} ~ {end_date}
                </div>
                이벤트 유형
                <div className="titleLi">
                    {type}
                </div>
                <div>
                    <EventLike />
                </div>
            </div>
            <div className="buyTicket">
                <div className="icons">
                    {/* <span><IoIosPeople size="20px" /></span>
                    <span>{post.현재참가인원}명</span> */}
                </div>
                <a className="reg" href="/">등록</a>
            </div>
        </div>
    )
}