import React from 'react'
import './EventInfoMain.scss'
export default function EventInfoMain({ post }) {
    const { user_id, title, content, start_date, end_date,
        ticket, onoff, address, club_status, type, image_id } = post
        const imageArray = image_id.split('.')
    return (
        <div className="eventMainPost">
            <div className="eventPost">
                {/* <div style={{ backgroundImage: `url(http://localhost:80/event1/${imageArray[1]})` }}>
                </div> */}
                <img src ={`http://localhost:80/event1/${imageArray[1]}`} className="mainImg"/>
                {content}
            </div>
        
            <div className = "ticketArea">
                <div className='ticketName'>티켓</div>
                <div className='ticketPost'>
                    <div className='ticketInfo'>주최 형식 : {onoff ? '온라인' : `오프라인`}</div>
                    <div className='ticketInfo'>총 인원 : {ticket}</div>
                    <div className='ticketInfo'>주소 : {onoff ? address : '오프라인으로 개최됩니다'}</div>
                    <div className='ticketInfo'>마감 날짜 : {start_date}</div>
                    <div className='ticketInfo'>1인당 1개 구입가능</div>
                </div>
            </div>
        </div>

    )
}
