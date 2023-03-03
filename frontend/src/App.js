import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import SignupFormPage from "./components/SignupFormPage";
import LoginForm from './components/LoginFormPage/LoginForm';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path="/signup" component={SignupFormPage}/>
      <Route exact path="/login" component={LoginForm}/> 
    </Switch>
    </>
  );
}

export default App;
