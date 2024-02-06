import React, {useContext} from 'react';
import {Button, TextField} from '@mui/material'
import '../../App.css'
import {multiStepContext} from "../../StepContext.jsx";

const FirstStep = () => {

    const { currentStep, setUserData, setCurrentStep } = useContext(multiStepContext)
    console.log('First Step',currentStep)

    const NextStepClickHandler = () => {
        setCurrentStep( step => step + 1)
    }
    return (
        <div className="step_container">
            <h3>Step 1</h3>
                <TextField label="First Name" margin="normal" variant="outlined" color="secondary"/>
                <TextField label="Last Name" margin="normal" variant="outlined" color="secondary"/>
                <TextField label="Contact Number" margin="normal" variant="outlined" color="secondary"/>
                <div className="buttons">
                    <Button className="button" variant="contained" color="primary" onClick={NextStepClickHandler}>Next</Button>
                </div>
        </div>
    );
};

export default FirstStep;
