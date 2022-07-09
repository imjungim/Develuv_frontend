import React from "react";
import "./App.scss";
import Mainpage from "./Page/Mainpage";
import Header from "./Components/Header";
import Faq from "./Page/Faq";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2373d60126e5eab209ee8c0d788500b6af3ef827
      <Header/>
      <Faq/>
=======
      <Header />
>>>>>>> 948466d4f3177150bf4b785950893e1e2b5502df
      <Routes>
        {/* url경로와 컴포넌트를 맵핑합니다. */}
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/EventInfo" element={<EventInfo />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/code-of-conduct" element={<code-of-conduct/>}/>
        <Route path="/myprofile" element={<Myprofile/>}/>
      
      </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
=======

      <Header />

>>>>>>> 2373d60126e5eab209ee8c0d788500b6af3ef827
=======
      <Footer/>
>>>>>>> 948466d4f3177150bf4b785950893e1e2b5502df
    </div>
  );
};

export default App;
