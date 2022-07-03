import React from 'react';
import './App.scss'
import Header from './Components/Header.js'
import EventInfo from './Containers/EventInfoContainer'
const App = () => {
  return (
    <div>
      <h1 id='first'>
    {/* <Header.js/> */}
      </h1>
    <EventInfo />
    </div>
  )
}

export default App;