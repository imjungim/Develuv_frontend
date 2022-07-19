import React from 'react'
import './EventInfoMain.scss'
export default function EventInfoMain({post}){
    
    return(
        <div className= "eventMainPost">
            <div className = "eventPost">
                {post.content}
            </div>
            {/* <div className = "ticketArea">
                <div className='ticketName'>티켓</div>
                <div className='ticketPost'>티켓 내용</div>
            </div> */}
        </div>
    )
}
