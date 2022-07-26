import './EventInfo.scss'
import { useState,useRef } from 'react'
import EventInfoTitle from '../Components/EventInfo/EventInfoTitle'
import EventInfoMain from '../Components/EventInfo/EventInfoMain'
import EventComments from '../Components/EventInfo/EventComment'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Cookies } from 'react-cookie';

const EventInfo = () => {
    const id = useParams().id
    const [post, setPost] = useState({image_id :"1.2"})
    const cookies = new Cookies()


    useEffect(()=>{
        axios.get(`http://localhost:80/event/${id}`)
        .then((response) => {
            setPost(response.data[0])
        })
        .catch((err) => { console.log(err) })
        
    },[])
    const nextId = useRef(0)
    const onCreate =  (text) => {
        // comment: {
        //     id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
        //     text
        //   }
    };
   

    return (
        <div className="EventInfo">
            <EventInfoTitle post={post} />
            <EventInfoMain post={post} />
            <EventComments  />
        </div>
    )
}
export default EventInfo;