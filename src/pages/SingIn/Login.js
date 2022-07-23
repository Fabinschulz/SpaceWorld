import React from 'react';
import { Container } from '@material-ui/core';
import logo from "../../image/astroSpace.jpg"
import ContentContainer from '../../components/Container';
import { LoginContainerStyled, LoginContentStyled } from './style';
import Login from '../FieldForm';
import earth from '../../Video/World.mp4';

function SignIn() {

    return (
        <>
            <video autoPlay loop muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: '50%',
                    top: '50%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <source src={earth} type="Video/mp4" /></video>
            <LoginContainerStyled>
                <ContentContainer>
                    <LoginContentStyled>
                        <Container component="article" maxWidth="sm">
                            <img src={logo} alt='' style={{
                                display: "block",
                                maxHeight: "150px",
                                margin: '0px auto',
                                textAlign: 'center',
                                borderBottom: '2px solid transparent',
                                borderImage: 'linear-gradient(0.25turn, rgba(138,43,226,1), rgba(255,0,128), rgba(56,2,155,0))',
                                borderImageSlice: 2,
                            }} />
                            <Login />
                        </Container>
                    </LoginContentStyled>
                </ContentContainer>
            </LoginContainerStyled>
        </>
    );
}

export default SignIn;