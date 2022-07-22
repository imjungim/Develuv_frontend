import React from 'react';
import EventCreateMain from '../Components/EventCreate/EventCreateMain';
import { useState } from 'react';
import EventCreateContent from '../Components/EventCreate/EventCreateContent'
import './EventCreateContainer.scss'
import axios from 'axios'

const EventCreateContainer = () => {
    // const [nullCheck, setnullCheck] = useState(false)
    const [eventArticle, setEventArticle] = useState({
        user_id: 1,
        email: "chh123@naver.com",
        title: "",
        onoff: null,
        type: null,
        start_date:"",
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
    const urlMove = () => { window.location.href = '/' }

    const onClick = async () => {
     
        try {
            await axios.post('http://localhost:8081/EventCreate',
                eventArticle,
            ).then((response) => {
                alert('등록이완료 되었습니다')
                window.location.href = '/'
            }).catch((err)=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
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
