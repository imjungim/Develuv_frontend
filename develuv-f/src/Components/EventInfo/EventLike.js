
import React from "react"
import { useState } from "react"
import './EventLike.scss'


const EventLike = () => {

    // // user 가 좋아요햇는지 체크하는 부분
    // const [likeCheck, setCheck] = useState(false)
    // const change = () => {
    //     likeCheck ? setCheck(false) : setCheck(true)
    // }
    
    const toggle  = ()=> {
    	document.getElementById('like-button').classList.toggle('selected');   
    }

    return (
        <button type="button" id="like-button" onClick ={toggle}>
        
        <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"/>
        </svg>
          Like
        </button>
        
    )
}

export default EventLike