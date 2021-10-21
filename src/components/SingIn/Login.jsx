import React from 'react';
import { TextField, Button, FormControl, FormLabel } from '@material-ui/core';
//import {  } from '@material-ui/icons';


function Login() {

    return (

            <FormControl fullWidth>
                <FormLabel><b>Login</b></FormLabel>
                <TextField  id="login"  variant="outlined" margin="normal"  />
                <FormLabel><b>Password</b></FormLabel>
                <TextField id="password" variant="outlined"  margin="normal" />
                <Button type ="subimit" variant="contained" color="primary">Acessar</Button>
            </FormControl>

    );
}

export default Login;