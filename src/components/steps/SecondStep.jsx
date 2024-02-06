import React, {useContext} from 'react';
import {Button, TextField} from "@mui/material";
import "../../App.css"
import {multiStepContext} from "../../StepContext.jsx";

const SecondStep = () => {

    const {currentStep, setCurrentStep} = useContext(multiStepContext);

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
            <TextField label="Email" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="Country" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="District" margin="normal" variant="outlined" color="secondary"/>
            <div className="buttons">
                <Button className="button" variant="contained" color="secondary" onClick={previousStepHandler}>Previous</Button>
                <Button className="button" variant="contained" color="primary" onClick={nextStepHandler}>Next</Button>
            </div>
        </div>
    );
};

export default SecondStep;
