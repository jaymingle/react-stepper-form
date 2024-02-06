import React from 'react';
import {Button, TextField} from "@mui/material";

const ThirdStep = () => {
    return (
        <div className="step_container">
            <h3>Step 3</h3>
            <TextField label="City" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="Landmark" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="Postal Address" margin="normal" variant="outlined" color="secondary"/>
            <div className="buttons">
                <Button className="button" variant="contained" color="primary">Next</Button>
            </div>
        </div>
    );
};

export default ThirdStep;
