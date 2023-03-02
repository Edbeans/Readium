import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import LandingPage from "./components/LandingPage";
import LoginForm from './components/LoginFormModal/LoginForm';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path="/signup" component={SignupFormPage}/>
      <Route exact path="/login" component={LoginForm}/> 
    </Switch>
    </>
  );
}

export default App;
