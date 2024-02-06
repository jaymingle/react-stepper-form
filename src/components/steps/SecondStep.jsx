import React from 'react';
import {Button, TextField} from "@mui/material";
import "../../App.css"

const SecondStep = () => {
    return (
        <div className="step_container">
            <h3>Step 2</h3>
            <TextField label="First Name" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="Last Name" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="Contact Number" margin="normal" variant="outlined" color="secondary"/>
            <Button className="button" variant="contained" color="primary">Next</Button>
        </div>
    );
};

export default SecondStep;
