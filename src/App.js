import React from 'react';
import SignIn from './pages/SingIn/Login';
//import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { BrowserRouter as Router } from 'react-router-dom';
import {  Route } from 'react-router';
//import Cadastro from './pages/Cadastro/Cadastro';

function App() {

  return (
    <Router>
      {/* <Switch> */}
        {/* <Route path='/' component={Cadastro} /> */}
        <Route path='/login' component={SignIn} />
      {/* </Switch> */}
    </Router>
  );
}

export default App;