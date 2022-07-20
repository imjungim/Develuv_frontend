import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import "../Components/Explore/Events.scss";
import Searchboard from "../Components/SearchKeyword/Searchboard"
import EventSearch from "../Components/Explore/EventSearch";


const SearchKeyword = () => {
  const [searchData, setSearchData] = useState([]);//데이터베이스받는값
  const [searchParams, setSearchParams] = useSearchParams();//params넘겨받는 state

  const keyword = searchParams.get("keyword");
  const type = searchParams.get("type");
  console.log("keyword :", keyword);
  console.log("type :", type);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/search?keyword=${keyword}&type=${type}`)
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [keyword, type]);


  useEffect(() => {
    console.log("searchData : ", searchData);
  }, [searchData]);


  return (
    <div>
    <EventSearch/>
    {searchData.length === 0 ?   
      <div>🤔검색결과가 없습니다.</div>
    : 
    <Searchboard searchData={searchData}/>  }
    </div>
  )
};

export default SearchKeyword;
