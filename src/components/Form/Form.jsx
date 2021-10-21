import React  from 'react';
import {TextField} from '@material-ui/core';
//import IconButton from '@material-ui/core/IconButton';
//import {Visibility,VisibilityOff} from '@material-ui/icons/Visibility';

function Form() {
   
        return (
            <><TextField id="Login" label="Login" variant="outlined" fullWidth/>
            <TextField id="password" label="Senha" variant="outlined" fullWidth />
            </>
        );
}

export default Form;