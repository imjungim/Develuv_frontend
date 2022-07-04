import React from "react";
import { IoIosPeople } from 'react-icons/io'
import './EventInfoTitle.scss'
import EventLike from './EventLike'
import img from './test.png'
export default function EventInfoTitle({ post }) {
    return (
        <div className="EventInfoTitle">
            <img className="img" src={img} />

            <div className="title">

                <h1>{post.제목}</h1>
                <h2>{post.태그}</h2>
                <div className="li">
                    일시
                </div>
                <div className="timeData">
                    {post.주최날짜}
                    <br />
                    {post.주최시간}
                </div>
                <div className="li">
                    주최
                </div>
                <div>
                    {post.주최자}
                </div>
                <div className="likeButton">
                    <EventLike />
                </div>
            </div>
            <div className="buyTicket">
                <div className="icons">
                    <span><IoIosPeople size="20px" /></span>
                    <span>{post.현재참가인원}명</span>
                </div>
                <a className = "reg" href="/">등록</a>
            </div>
        </div>
    )
}