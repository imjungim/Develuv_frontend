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
import EventCreateContainer from "./Containers/EventCreateContainer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Modules/index';

const store = createStore(rootReducer); // 스토어를 만듭니다.


const App = () => {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Routes>
          {/* url경로와 컴포넌트를 맵핑합니다. */}
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/EventInfo" element={<EventInfo />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/code-of-conduct" element={<code-of-conduct />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path='/EventCreate' element = {<EventCreateContainer/>} />
        </Routes>
      </Provider>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
