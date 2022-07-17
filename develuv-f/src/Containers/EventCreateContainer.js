import React from 'react';
import EventCreateMain from '../Components/EventCreate/EventCreateMain';
import { useState } from 'react';
import EventCreateContent from '../Components/EventCreate/EventCreateContent'
import './EventCreateContainer.scss'
const EventCreateContainer = ()=>{
    
    const [eventArticle, setEventArticle] = useState({
        onoff: null,
        type: null,
        eventTitle: "",
        eventTime: "",
        eventText:"",
        eventMax:0,
        titleImg:""
    });
    const onChange = e => {
        const { name, value } = e.target;
        setEventArticle({
            ...eventArticle,
            [name]: value
        });
    };
    const onClick = ()=>{
        console.log(eventArticle)
    }

        return(
            <div id ="EventCreateContainer">
                <EventCreateMain eventArticle={eventArticle} setEventArticle= {setEventArticle} onChange={onChange}/>
                <EventCreateContent onChange={onChange} eventArticle={eventArticle} setEventArticle={setEventArticle} onClick={onClick}/>
            </div>
        )
}

export default EventCreateContainer
