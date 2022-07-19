import React from 'react';
import EventCreateMain from '../Components/EventCreate/EventCreateMain';
import { useState } from 'react';
import EventCreateContent from '../Components/EventCreate/EventCreateContent'
import './EventCreateContainer.scss'
import axios from 'axios'
const EventCreateContainer = () => {
    const [nullCheck, setnullCheck] = useState(false)
    const [eventArticle, setEventArticle] = useState({
        user_id: 1,
        email: "chh123@naver.com",
        title: "",
        img: "",
        onoff: null,
        type: null,
        end_date: "",
        content: "",
        ticket: null,
        address: "",
    });

    const onChange = e => {
        const { name, value } = e.target;
        setEventArticle({
            ...eventArticle,
            [name]: value
        });
    };
    
    const onClick = async () => {
        // 빈값 체크
        for (const i in eventArticle) {
            if (eventArticle[i] !== null || eventArticle[i] !== "") {
                setnullCheck(true)
                break;
            }
        }
        if (true) {
            try {
                await axios.post('http://localhost:8081/EventCreate',
                    eventArticle
                )
            } catch (err) {
                console.log(err)
            }
        } else {
            alert('빈칸을 모두 입력하세요')
        }
    }

    return (
        <div id="EventCreateContainer">
            <EventCreateMain eventArticle={eventArticle} setEventArticle={setEventArticle} onChange={onChange} />
            <EventCreateContent onChange={onChange} eventArticle={eventArticle} setEventArticle={setEventArticle} onClick={onClick} />
        </div>
    )
}

export default EventCreateContainer
