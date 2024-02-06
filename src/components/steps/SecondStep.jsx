import React, {useContext} from 'react';
import {Button, TextField} from "@mui/material";
import "../../App.css"
import {multiStepContext} from "../../StepContext.jsx";

const SecondStep = () => {

    const {currentStep, userData, setUserData, setCurrentStep} = useContext(multiStepContext);

    const previousStepHandler = () => {
        if(currentStep !== 1){
            setCurrentStep(step => step - 1)
        }
    }

    const nextStepHandler = () => {
        if(currentStep !== 3){
            setCurrentStep(step => step + 1)
        }
    }

    return (
        <div className="step_container">
            <h3>Step 2</h3>
            <TextField onChange={e => setUserData({...userData, 'email': e.target.value})} label="Email" margin="normal" variant="outlined" color="secondary"/>
            <TextField onChange={e => setUserData({...userData, 'country': e.target.value})} label="Country" margin="normal" variant="outlined" color="secondary"/>
            <TextField onChange={e => setUserData({...userData, 'district': e.target.value})} label="District" margin="normal" variant="outlined" color="secondary"/>
            <div className="buttons">
                <Button className="button" variant="contained" color="secondary" onClick={previousStepHandler}>Previous</Button>
                <Button className="button" variant="contained" color="primary" onClick={nextStepHandler}>Next</Button>
            </div>
        </div>
    );
};

export default SecondStep;
