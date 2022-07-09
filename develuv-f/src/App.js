import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "react-full-page";
import Mainpage from "./Page/Mainpage";
import Header from "./Components/Header";
import Faq from "./Page/Faq";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
import Login from "./Page/Login";
import Explore from "./Page/Explore";
import EventInfo from "./Containers/EventInfoContainer";
import Myprofile from "./Page/Mymenu";
import CodeofConduct from "./Page/CodeofConduct";
import Terms from "./Page/Terms"
import Privacy from "./Page/Privacy";
import Mymenu from "./Page/Mymenu";



const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* url경로와 컴포넌트를 맵핑합니다. */}
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/EventInfo" element={<EventInfo />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/code-of-conduct" element={<CodeofConduct/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/mymenu" element={<Mymenu/>}/>
      
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
