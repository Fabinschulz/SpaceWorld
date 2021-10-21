import React  from 'react';
import Form from './components/Form/Form.jsx'
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

function App() {

    return (

      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" color="primary">Space Wold</Typography>
        <Form />
      </Container>
    );
  }

export default App;
