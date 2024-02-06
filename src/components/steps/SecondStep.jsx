import React from 'react';
import {Button, TextField} from "@mui/material";
import "../../App.css"

const SecondStep = () => {
    return (
        <div className="step_container">
            <h3>Step 2</h3>
            <TextField label="Email" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="Country" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="District" margin="normal" variant="outlined" color="secondary"/>
            <div className="buttons">
                <Button className="button" variant="contained" color="secondary">Previous</Button>
                <Button className="button" variant="contained" color="primary">Next</Button>
            </div>
        </div>
    );
};

export default SecondStep;
