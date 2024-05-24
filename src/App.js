import './App.css';
// ADD META TAGS
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import BookingPage from "./components/BookingPage";
import Footer from './components/Footer';
import { useState, useReducer } from "react";



// import router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// This function will change the availableTimes based on the selected date.
//For now, the function can return the same available times regardless of the date.
// const updateTimes = (state, action) => {
  
//  return availableTimes;
// }

// options source
// https://stackoverflow.com/questions/14473207/how-can-i-give-an-array-as-options-to-select-element



function App() {

// const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
//   const initializeTimes = [
//     {value: "17:00", text: "17:00" },
//     {value: "18:00", text: "18:00" },
//     {value: "19:00", text: "19:00" },
//     {value: "20:00", text: "20:00" },
//     {value: "21:00", text: "21:00" },
//     {value: "22:00", text: "22:00" },
//   ];
  return (

    <Router>
      {/* The App component’s root element uses a div element. As this is not a semantic tag, replace it with a React fragment. a fragment starts with a <> tag and ends with a </> tag.*/}
      <>
        <Nav/>
          <Routes>
          <Route path='/' exact element={<Homepage/>}/>
          {/* <Route path='/booking' exact element={<BookingPage availableTimes={availableTimes}/>}/> */}
          <Route path='/booking' exact element={<BookingPage />}/>

          </Routes>
        {/* <Footer/> */}
      </>
    </Router>
  );
}

export default App;