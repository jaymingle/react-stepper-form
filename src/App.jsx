import React, {useState, useContext} from 'react'

import './App.css'
import FirstStep from "./components/steps/FirstStep.jsx";
import SecondStep from "./components/steps/SecondStep.jsx";
import ThirdStep from "./components/steps/ThirdStep.jsx";
import {Stepper, StepLabel, Step} from "@mui/material";
import {multiStepContext} from "./StepContext.jsx";

function App() {

    const {currentStep, finalData} = useContext(multiStepContext)

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
          <Stepper style={{width: '18%'}} activeStep={currentStep-1} orientation="horizontal">
              <Step>
                  <StepLabel>Personal</StepLabel>
              </Step>
            <Step>
                  <StepLabel>Location</StepLabel>
              </Step>
            <Step>
                  <StepLabel>Work</StepLabel>
              </Step>
          </Stepper>
      </div>
      {showStep(currentStep)}

      {/*<DisplayData/>*/}


    </div>
  )
}

export default App
