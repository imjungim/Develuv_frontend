import React from "react";
import "./App.scss";
import Mainpage from './Page/Mainpage';
import Header from "./Components/Header";
import "react-full-page";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Explore from "./Page/Explore";
import EventInfo from "./Containers/EventInfoContainer";
import Myprofile from "./Page/Myprofile";
import Codeofconduct from "./Page/code-of-conduct";

const App = () => {
  return (
    <div className="App">

      <Header/>
      {/* <Faq/> */}
      <Routes>
        {/* url경로와 컴포넌트를 맵핑합니다. */}
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/EventInfo" element={<EventInfo />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="/code-of-conduct" element={<code-of-conduct/>}/>
        <Route path="/myprofile" element={<Myprofile/>}/>
      </Routes>

      {/* <Header /> */}

    </div>
  );
};

export default App;
