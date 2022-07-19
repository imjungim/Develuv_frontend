import React from "react";
import { IoIosPeople } from 'react-icons/io'
import './EventInfoTitle.scss'
import EventLike from './EventLike'
import img from './test.png'
export default function EventInfoTitle({ post }) {
    const { board_key, user_id, title, img, email, content, start_date, end_date,
        ticket, onoff, address, club_status, type } = post

    
    return (
        <div className="EventInfoTitle">
            <div className="imgBox" style={{ backgroundImage: `url(${img})` }} />
            <div className="title">
                <h1>{title}</h1>
                {start_date}
                <div className="titleLi">
                    일시
                </div>
                <div className="timeData">
                    {end_date}
                </div>
                <div className="titleLi">
                    주최
                </div>
                <div>
                    {user_id}
                    {email}
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