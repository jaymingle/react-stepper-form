import React from 'react';
import {Button, TextField} from '@mui/material'

const FirstStep = () => {
    return (
        <div>
            <h3>Step 1</h3>
                <TextField label="First Name" margin="normal" variant={"outlined"} color={"secondary"}/>
               {/*<Button>Welcome</Button>*/}
        </div>
    );
};

export default FirstStep;
