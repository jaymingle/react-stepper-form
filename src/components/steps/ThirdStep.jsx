import React, {useContext} from 'react';
import {Button, TextField} from "@mui/material";
import {multiStepContext} from "../../StepContext.jsx";

const ThirdStep = () => {

    const {currentStep, userData, setUserData, setCurrentStep, submitData} = useContext(multiStepContext);

    const previousStepHandler = () => {
        if(currentStep !== 1){
            setCurrentStep(step => step - 1)
        }
    }

    // const submitStepHandler = () => {
    //     // if(currentStep !== 3){
    //     //     setCurrentStep(step => step + 1)
    //     // }
    //     console.log("submitted")
    //     setCurrentStep(step => step -2)
    // }

    return (
        <div className="step_container">
            <h3>Step 3</h3>
            <TextField onChange={e => setUserData({...userData, 'city': e.target.value})} label="City" margin="normal" variant="outlined" color="secondary"/>
            <TextField onChange={e => setUserData({...userData, 'landmark': e.target.value})} label="Landmark" margin="normal" variant="outlined" color="secondary"/>
            <TextField onChange={e => setUserData({...userData, 'postalAddress': e.target.value})} label="Postal Address" margin="normal" variant="outlined" color="secondary"/>
            <div className="buttons">
                <div className="buttons">
                    <Button className="button" variant="contained" color="secondary" onClick={previousStepHandler}>Previous</Button>
                    <Button className="button" variant="contained" color="primary" onClick={submitData}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default ThirdStep;
