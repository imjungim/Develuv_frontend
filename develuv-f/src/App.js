import React from "react";
import "./App.scss";
//import Mainpage from './Page/Mainpage';
import Header from "./Components/Header";
import Faq from "./Components/Faq";
import EventSearch from "./Components/EventSearch";
import EventItem from "./Components/EventItem";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
import "react-full-page";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";





const App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
=======

>>>>>>> 2373d60126e5eab209ee8c0d788500b6af3ef827
      <Header/>
      <Faq/>
      <Routes>
        {/* url경로와 컴포넌트를 맵핑합니다. */}
        {/* <Route path="/" element={<Mainpage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
<<<<<<< HEAD
=======

      <Header />

>>>>>>> 2373d60126e5eab209ee8c0d788500b6af3ef827
    </div>
  );
};

export default App;
