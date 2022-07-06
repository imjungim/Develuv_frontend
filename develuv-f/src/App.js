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
import EventInfo from "./Containers/EventInfoContainer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Modules/index';

const store = createStore(rootReducer); // 스토어를 만듭니다.

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Faq/>
      <Routes>
        {/* url경로와 컴포넌트를 맵핑합니다. */}
        {/* <Route path="/" element={<Mainpage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore/>} />
      </Routes>
    </div>
  );
};

export default App;
