import React from 'react';
import {Button, TextField} from '@mui/material'
import '../../App.css'

const FirstStep = () => {
    return (
        <div className="step_container">
            <h3>Step 1</h3>
                <TextField label="First Name" margin="normal" variant="outlined" color="secondary"/>
                <TextField label="Last Name" margin="normal" variant="outlined" color="secondary"/>
                <TextField label="Contact Number" margin="normal" variant="outlined" color="secondary"/>
                <div className="buttons">
                    <Button className="button" variant="contained" color="primary">Next</Button>
                </div>
        </div>
    );
};

export default FirstStep;
