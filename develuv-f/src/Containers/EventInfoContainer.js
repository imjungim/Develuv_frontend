import './EventInfo.scss'
import { useState } from 'react'
import EventInfoTitle from '../Components/EventInfo/EventInfoTitle'
import EventInfoMain from '../Components/EventInfo/EventInfoMain'
import EventComments from '../Components/EventInfo/EventComment'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../Modules/Comment';
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EventInfo = ()=> {
    const id = useParams().id
    const infoData = {};
    useEffect(() => {
        axios.get(`http://localhost:8081/EventInfo/${id}`)
            .then((response) => { 
               setPost(response.data[0])
            })
            .catch((err) => { console.log(err) })
    }, [])
    const [post, setPost] = useState(
        {
            ...infoData
        })

        console.log(post)
    const comments = useSelector(store => store.CommentReducer);
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addComment(text));


    return (
        <div className="EventInfo">
            <EventInfoTitle post={post} />
            <EventInfoMain post ={post}/>
            <EventComments comments={comments} onCreate={onCreate} />
        </div>
    )
}
export default EventInfo;