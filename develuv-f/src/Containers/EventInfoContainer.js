import './EventInfo.scss'
import { useState } from 'react'
import EventInfoTitle from '../Components/EventInfo/EventInfoTitle'
import EventInfoMain from '../Components/EventInfo/EventInfoMain'
import EventComments from '../Components/EventInfo/EventComment'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EventInfo = () => {
    const id = useParams().id
    const [post, setPost] = useState({image_id :"1.2"})
    console.log(post)

    useEffect(()=>{
        axios.get(`http://localhost:80/event/${id}`)
        .then((response) => {
            setPost(response.data[0])
        })
        .catch((err) => { console.log(err) })
    },[])

    const onClick = async () => {
        try {

        } catch (err) {

        }
    }
    const onCreate = async () => {
        try {

        } catch (err) {

        }
    };


    return (
        <div className="EventInfo">
            <EventInfoTitle post={post} />
            {/* <EventInfoMain post={post} />
            <EventComments onCreate={onCreate} /> */}
        </div>
    )
}
export default EventInfo;