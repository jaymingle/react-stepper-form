import React, {useState} from 'react'

import './App.css'
import FirstStep from "./components/steps/FirstStep.jsx";
import SecondStep from "./components/steps/SecondStep.jsx";
import ThirdStep from "./components/steps/ThirdStep.jsx";
import DisplayData from "./components/DisplayData.jsx";
import {Stepper, StepLabel, Step} from "@mui/material";

function App() {

  const [step, setStep] = useState(1)

  return (
    <div className="app_container">
        <h3 style={{color: "red", fontSize: "2rem", textDecoration: "underline"}}>Multi Step Form</h3>
          <FirstStep/>
          <SecondStep/>
          <ThirdStep/>
          <DisplayData/>

      <div className="center-stepper">
          <Stepper style={{width: '18%'}} activeStep={"1"} orientation="horizontal">
              <Step>
                  <StepLabel></StepLabel>
              </Step>
            <Step>
                  <StepLabel></StepLabel>
              </Step>
            <Step>
                  <StepLabel></StepLabel>
              </Step>
          </Stepper>
      </div>

    </div>
  )
}

export default App
