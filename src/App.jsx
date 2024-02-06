import React, {useState} from 'react'

import './App.css'
import FirstStep from "./components/steps/FirstStep.jsx";
import SecondStep from "./components/steps/SecondStep.jsx";
import ThirdStep from "./components/steps/ThirdStep.jsx";
import DisplayData from "./components/DisplayData.jsx";
import {Stepper, StepLabel, Step} from "@mui/material";

function App() {

  // const [step, setStep] = useState(1)

  const showStep = step => {
    switch(step){
      case 1:
        return <FirstStep/>

      case 2:
        return <SecondStep/>

      case 3:
        return <ThirdStep/>

      default:
        return <FirstStep/>
    }

  }

  return (
    <div className="app_container">
      <h3 style={{color: "red", fontSize: "2rem", textDecoration: "underline"}}>Multi Step Form</h3>
      <div className="center_element center-stepper">
          <Stepper style={{width: '18%'}} activeStep={1} orientation="horizontal">
              <Step>
                  <StepLabel>Personal</StepLabel>
              </Step>
            <Step>
                  <StepLabel>Address</StepLabel>
              </Step>
            <Step>
                  <StepLabel>Work</StepLabel>
              </Step>
          </Stepper>
      </div>
      {showStep(3)}

      {/*<DisplayData/>*/}


    </div>
  )
}

export default App
