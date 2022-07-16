import React from 'react';
import { TextField, Button, FormControl, FormLabel, Container } from '@material-ui/core';
import logo from "../../image/astroSpace.jpg"
import { Link } from 'react-router-dom';
import ContentContainer from '../../components/Container';
import { LoginContainerStyled, LoginContentStyled } from './style';


function SignIn() {

    return (

        <LoginContainerStyled>
            <ContentContainer>
                <LoginContentStyled>
                    <Container component="article" maxWidth="sm">
                        <img src={logo} alt='' style={{ width: "50%", position: 'relative', padding: '28px', left: '100px' }} />
                        <FormControl fullWidth>
                            <FormLabel><b>Email</b></FormLabel>
                            <TextField id="login" variant="outlined" margin="normal" />
                            <FormLabel><b>Senha</b></FormLabel>
                            <TextField id="password" variant="outlined" margin="normal" />
                            <br />
                            <Button type="subimit" variant="contained" color="primary">Acessar</Button>
                            <br />
                            <div>
                                <Link to='/' style={{ textDecoration: "none", color: '#1e87f0' }}>
                                    Esqueceu sua senha?
                                </Link>
                            </div>
                            <br />
                        </FormControl>
                    </Container>
                </LoginContentStyled>
            </ContentContainer>
        </LoginContainerStyled>

    );
}

export default SignIn;