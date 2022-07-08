import React from "react";
import EventItem from "../Components/EventItem";
import EventSearch from "../Components/EventSearch";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Testpage from "../Components/Testpage";


const Explore = ({
  navitext1, 
  navitext2, 
  navitext3, 
  navitext4
}) =>{

  const dummyList = [
    {
      id : 1,
      image : "이미지영역",
      date : "2022-07-08(금)",
      type : "온라인" ,
      title : "Node Js KOSTA"
    },
    {
      id : 2,
      image : "이미지영역",
      date : "2022-07-09(토)",
      type : "온라인" ,
      title : "Node Js KOSTA"
    },
    {
      id : 3,
      image : "이미지영역",
      date : "2022-07-10(일)",
      type : "온라인" ,
      title : "Node Js KOSTA"
    },
    {
      id : 4,
      image : "이미지영역",
      date : "2022-07-11(월)",
      type : "온라인" ,
      title : "Node Js KOSTA"
    },
  ]

  return (
    <div>
      
      <EventSearch/>
      <EventItem eventList={dummyList}/>


    </div>
  )
}

export default Explore;