import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "react-full-page";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from "./Page/Mainpage";
import Header from "./Components/Header";
import Faq from "./Page/Faq";
import Footer from "./Components/Footer";
import Login from "./Page/Login";
import Explore from "./Page/Explore";
import EventInfo from "./Containers/EventInfoContainer";
import My from "./Page/My";
import Unregister from "./Page/Unregister";
import AttendeePage from "./Components/Attendee/Attendee";
import EventCreateContainer from "./Containers/EventCreateContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Modules/index";
import Signup from "./Page/Signup";
import Events from "./Components/Explore/Events";
import SearchKeyword from "./Page/SearchKeyword";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Faq/> */}
      {/* <Provider store={store}> */}
      <Routes>
        {/* url경로와 컴포넌트를 맵핑합니다. */}
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/signup" element={<Signup/>} />
        <Route path="/explore" element={<Explore />} />
        
        <Route path="/events" element={<Events/>} /> 
        <Route path="/events/:id" element={<EventInfo />} /> {/*이벤트 상세페이지 */}
        <Route path="/search" element={<SearchKeyword/>} /> 이벤트 검색결과 페이지

        {/* 이벤트 생성 컨테이너 */}
        <Route path="/EventCreate" element={<EventCreateContainer/>} />

        {/* faq탭 */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/code-of-conduct" element={<Faq />} />
        <Route path="/terms" element={<Faq />} />
        <Route path="/privacy" element={<Faq />} />
 
        {/* myprofile탭 */}
        <Route path="/my/ticket" element={<My />} />
        <Route path="/my/events" element={<My />} />
        <Route path="/my/events/attendee" element={<AttendeePage />} />
        <Route path="/my/likes" element={<My />} />
        <Route path="/my/profile" element={<My />} />
        <Route path="/unregister" element={<Unregister />} />
      </Routes>
      
      {/* </Provider> */}
      {/* <Header /> */}
      <Footer/>
    </div>
  );
};

export default App;