import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button"

import { useState } from "react";



// function BookingForm(props){
function BookingForm(){

    // state
    const [startDate, setStartDate] = React.useState(new Date());

    const [timeData, setTimeData] = useState(undefined);
  
    const [guestData, setGuestData] = useState(undefined);
  
    const [occasionData, setOccasionData] = useState(undefined);


    // data
    const availableTimes =[
        {value: "17:00", text: "17:00" },
        {value: "18:00", text: "18:00" },
        {value: "19:00", text: "19:00" },
        {value: "20:00", text: "20:00" },
        {value: "21:00", text: "21:00" },
        {value: "22:00", text: "22:00" },
      ];
      const numberOfGuestOption = [
        "1",
        "2",
        "3",
        "4",
        "5+"
    ];
    const occasionOption = [
      "Birthday",
      "Anniversary",
      "None"
    ];

//   functions
      const timeOptionsHandler = (event) => {
        setTimeData(event.target.value);
    };

    const numberOfGuestChangeHandler = (event) => {
        setGuestData(event.target.value);
    };
    const occasionChangeHandler = (event) => {
        setOccasionData(event.target.value);
    };


    return(
        <div className="bookingForm">
            <h1>Reserve Part 1</h1>
        {/* <form> */}
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            {/* <label htmlFor="theDate">
                    <b>Choose date</b>
            </label>
            <DatePicker
                    label="Controlled picker"
                    selected={startDate}
                    onChange={(newValue) => setStartDate(newValue)}
                    className="w3-input w3-border"
                    id="theDate"
            /> */}

            <label htmlFor="time">
                    <b>Please Select a Time:</b>
            </label>
            <select onChange={timeOptionsHandler} >
                    {availableTimes.map(option => {
                        return (
                            <option value={option.value}>
                                {option.text}
                            </option>
                        );
                    })}
            </select>
            <h3>You selected: {timeData} </h3>
           
            {/* <label htmlFor="time">
                    <b>Number of guests</b>
            </label>
            <select onChange={numberOfGuestChangeHandler}>
                <option>Please choose one option</option>
                {numberOfGuestOption.map((option, index) => {
                    return (
                        <option value={option} key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <h3>You selected: {guestData} </h3>

            <label htmlFor="time">
                    <b>Occasion</b>
            </label>
            <select onChange={occasionChangeHandler}>
                <option>Please choose one option</option>
                {occasionOption.map((option, index) => {
                    return (
                        <option value={option} key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            <h3>You selected: {occasionData} </h3> */}

{/* <label htmlFor="msg" className='content-text w3-text-blue'>
                <b>Input Announcement Message</b>
                </label>
              <textarea className="w3-input w3-border" type="text" id="msg" name="announcement" value={formData.announcement} onChange={handleChange} placeholder="Write an announcement.." style={{height:"100px"}}></textarea> */}

        <Button input="Make Your reservation"/>

        </form>
        </div>
    )
}
export default BookingForm;