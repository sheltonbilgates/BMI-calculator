import "./App.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";


function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight == 0 || height == 0) {
      alert("Please enter a valid Weight and Height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are Underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are Perfect");
      } else {
        setMessage("You are Overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <br />
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kg)</label>
            <br />
            <TextField
              id="standard-password-input"
              label="Enter Your Weight"
              type="number"
              variant="standard"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label>Height (m)</label>
            <br />
            <TextField
              id="standard-password-input"
              label="Enter Your Height"
              type="number"
              variant="standard"
              value={height}
              onChange={(e1) => {
                setHeight(e1.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Refresh
            </button>
          </div>
          <div className="message">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
