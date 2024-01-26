import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Content = () => {
    return (
        <article>
            <h1>My First Component</h1>
            <ul>
                <li>Components: UI Building Blocks</li>
                <li>Defining a Component</li>
                <li>Using a Component</li>
            </ul>
            <BasicTextFields />
        </article>
    )
}








const BasicTextFields = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
    );
}
export { Content, BasicTextFields };


