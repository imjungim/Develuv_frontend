import './EventInfo.scss'
import { useState} from 'react'
import EventInfoTitle from '../Components/EventInfo/EventInfoTitle'
import EventInfoMain from '../Components/EventInfo/EventInfoMain'
import EventComments from '../Components/EventInfo/EventComment'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addCommnet} from '../Modules/Comment';

export default function EventInfo() {

    const [post, setPost] = useState(
        {
            제목: "KOSTA 노드반",
            태그: ["fullstack",
                "javascript",
                "취업 1000%"],
            주최날짜: "2022년 07월 28일",
            주최시간: "오후 01:00 - 오후 06:00",
            주최자: "이창현",
            현재참가인원: 0,
        })
        
        const comments = useSelector(store => store.CommentReducer);
        const dispatch = useDispatch();
        const onCreate = text => dispatch(addCommnet(text));
        
      
    return (
        <div className="EventInfo">
            <EventInfoTitle post={post} />
            <EventInfoMain />
            <EventComments comments={comments} onCreate={onCreate} />
        </div>
    )
}