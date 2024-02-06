import React, {useContext} from 'react';
import {Button, TextField} from '@mui/material'
import '../../App.css'
import {multiStepContext} from "../../StepContext.jsx";

const FirstStep = () => {

    const { currentStep, userData, setUserData, setCurrentStep } = useContext(multiStepContext)

    const NextStepClickHandler = () => {
        setCurrentStep( step => step + 1)
    }
    return (
        <div className="step_container">
            <h3>Step 1</h3>
                <TextField value={userData.firstName} onChange={e => setUserData({...userData, 'firstName': e.target.value})} label="First Name" margin="normal" variant="outlined" color="secondary"/>
                <TextField onChange={e => setUserData({...userData, 'lastName': e.target.value})} label="Last Name" margin="normal" variant="outlined" color="secondary"/>
                <TextField onChange={e => setUserData({...userData, 'contactNumber': e.target.value})} label="Contact Number" margin="normal" variant="outlined" color="secondary"/>
                <div className="buttons">
                    <Button className="button" variant="contained" color="primary" onClick={NextStepClickHandler}>Next</Button>
                </div>
        </div>
    );
};

export default FirstStep;
