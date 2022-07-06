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
//import Mainpage from "./Page/Mainpage";
import Login from "./Page/Login";





const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
