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
    });
    const onChange = e => {
        const { name, value } = e.target;
        setEventArticle({
            ...eventArticle,
            [name]: value
        });
    };

        return(
            <div id ="EventCreateContainer">
                <EventCreateMain eventArticle={eventArticle} setEventArticle= {setEventArticle} onChange={onChange}/>
                <EventCreateContent onChange={onChange} eventArticle={eventArticle}/>
            </div>
        )
}

export default EventCreateContainer
