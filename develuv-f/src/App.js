import React from "react";
import "./App.scss";
//import Mainpage from './Page/Mainpage';
import Header from "./Components/Header";
import Faq from "./Components/Faq";
import EventSearch from "./Components/EventSearch";
import EventItem from "./Components/EventItem";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";

const App = () => {
  return (
    // <BrowserRouter>
      <div className="App">
        <Header/>
        <Faq/>
        


        {/*<Routes>
          url경로와 컴포넌트를 맵핑합니다.
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<EventList />} />
          <Route path="/events" element={<EventInfoContainer />} />
          <Route path="/explore" element={<join />} />
          <Route path="/my/tickets" element={<MyTickets/>} />
          <Route path="/my/likes" element={<MyLikes/>} />
          <Route path="/my/events" element={<Myevent/>} />
          <Route path="/my/profile" element={<Myprofile/>} />
        </Routes>*/}
        <Mainpage/>
        <Footer />
      </div>
   // </BrowserRouter>
  );
};


export default App;
