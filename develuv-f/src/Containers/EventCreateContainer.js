import React from 'react';
import EventCreateMain from '../Components/EventCreate/EventCreateMain';
import { useState, useRef } from 'react';
import EventCreateContent from '../Components/EventCreate/EventCreateContent'
import './EventCreateContainer.scss'
import axios from 'axios'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

const EventCreateContainer = () => {
    const [nullCheck, setNullCheck] = useState(true)

    const [eventArticle, setEventArticle] = useState({
        user_id: 1,
        title: null,
        onoff: 0,
        type: null,
        start_date: "",
        end_date: "",
        content: null,
        ticket: null,
        address: "주소",
        image_id: "",
    });

    const onChange = e => {
        const { name, value } = e.target;
        setEventArticle({
            ...eventArticle,
            [name]: value
        });
    };
    const eventID = useRef(1)
    const offset = new Date().getTimezoneOffset() * 60000; // 시간계산 변수

    const changeKRTime = (date) => {
        return new Date(date - offset).toISOString().replace("T", " ").replace(/\..*/, '');
    }

    const urlMove = () => { window.location.href = '/' }

    const imageRef = useRef([])

    const onClick = async () => {
        const frm = new FormData()
        const startTime = Number(eventArticle.start_date.replace(/\D/gi, ''))
        const endTime = Number(eventArticle.end_date.replace(/\D/gi, ''))
        frm.append("image", imageRef.current[0].files[0]);
        frm.append("image", imageRef.current[1].files[0]);
        // console.log(imageRef.current[1].files[0])
        const checkArray = Object.values(eventArticle)
        if (startTime < endTime) {
            for (let i = 0; i < checkArray.length; i++) {
                if (checkArray[i] === null) {
                    setNullCheck(false)
                    break;
                }
            }
            if (nullCheck) {
                const responseIMG = await axios.post('http://localhost:80/EventCreate/upload', frm, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(responseIMG.data)
                const eventObject = {...eventArticle,
                            image_id : responseIMG.data}
               
                await axios.post('http://localhost:80/EventCreate',
                eventObject
                )
                console.log(eventArticle)
                alert('이벤트가 개설되었습니다')
                window.location.href = "/events"
            } else {
                alert('빈칸이 있습니다')
            }
        } else {
            alert('개최시간이 잘못되었습니다')
        }
    }
    return (
        <div id="EventCreateContainer">
            <EventCreateMain eventArticle={eventArticle} setEventArticle={setEventArticle} onChange={onChange} />
            <EventCreateContent changeKRTime={changeKRTime} imageRef={imageRef} onChange={onChange} eventArticle={eventArticle} setEventArticle={setEventArticle} onClick={onClick} />
        </div>
    )
}

export default EventCreateContainer
