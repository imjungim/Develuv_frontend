import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs"
import React from "react"
import { useState } from "react"

const EventLike = () => {
    const [likeCheck, setCheck] = useState(false)
    const change = () => {
        likeCheck ? setCheck(false) : setCheck(true)
    }
    return (
        <div id="likesButton">
            <button onClick={change}>{likeCheck ? <BsHeartFill className="like"/> : <BsHeart className="unlike"/>} Likes</button>
        </div>
    )
}

export default EventLike