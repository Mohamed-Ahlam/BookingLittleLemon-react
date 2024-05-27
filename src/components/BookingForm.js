import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button"
import ConfirmedBooking from "./ConfirmedBooking";
import { Link } from "react-router-dom";

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
            <h1>Reservation</h1>
        {/* <form> */}
        <form>
            <div className="userInput"> 
            <label htmlFor="theDate">
                    Choose date:
            </label>
            <DatePicker
                    label="Controlled picker"
                    selected={startDate}
                    onChange={(newValue) => setStartDate(newValue)}
                    className="date"
                    id="theDate"
                    style={{height: "30px", width: "200px", backgroundColor: "#EEEEEE"}}
            />
            </div>
            
            <div className="userInput">
            <label htmlFor="time">
                                Select a Time:
                        </label>
                        <select onChange={timeOptionsHandler} >
                            <option>None</option>

                                {availableTimes.map(option => {
                                    return (
                                        <option value={option.value}>
                                            {option.text}
                                        </option>
                                    );
                                })}
                        </select>
                        {/* <h3>You selected: {timeData} </h3> */}
            </div>
                        
                    <div className="userInput">
                            <label>
                                        Number of guests:
                                </label>
                                <select onChange={numberOfGuestChangeHandler}>
                                    <option>None</option>
                                    {numberOfGuestOption.map((option, index) => {
                                        return (
                                            <option value={option} key={index}>
                                                {option}
                                            </option>
                                        );
                                    })}
                                </select>
                                {/* <h3>You selected: {guestData} </h3> */}
                    </div>
            <div className="userInput">
            <label > Occasion:
            </label>
                        <select onChange={occasionChangeHandler}>
                            <option>None</option>
                            {occasionOption.map((option, index) => {
                                return (
                                    <option value={option} key={index}>
                                        {option}
                                    </option>
                                );
                            })}
                        </select>
                        {/* <h3>You selected: {occasionData} </h3> */}
            </div>

            

                <label>
                Additional Comments
                </label>
              {/* <textarea className="w3-input w3-border" type="text" id="msg" name="announcement" value={formData.announcement} onChange={handleChange} placeholder="Write an announcement.." style={{height:"100px"}}></textarea> */}
              <textarea type="text" style={{height:"100px", width: "300px",backgroundColor: "#EEEEEE"}}></textarea>

<p style={{fontSize:"0.8rem"}}>Note: You cannot edit your reservation after submission. Please double check your answer before submitting your reservation request.</p>
        <Link to="/confirmation">
        <Button input="Make Your reservation"/>
        </Link>

        </form>
        </div>
    )
}
export default BookingForm;