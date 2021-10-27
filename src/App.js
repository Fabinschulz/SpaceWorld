import React from 'react';
import Login from './pages/SingIn/Login';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

function App() {

  return (

    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" color="primary">Space World</Typography>
      <Login />
    </Container>
  );
}

export default App;
