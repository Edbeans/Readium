import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import SignupFormPage from "./components/SignupFormPage";
import LoginForm from './components/LoginFormPage/LoginForm';
import LandingPage from './components/LandingPage';
import StoryShowPage from './components/Stories/StoryShowPage';
import StoryFormPage from './components/Stories/StoryFormPage';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/signup" component={SignupFormPage}/>
      <Route exact path="/login" component={LoginForm}/> 
      <Route exact path="/stories/:storyId" component={StoryShowPage}/>
      <Route exact path="/stories" component={StoryFormPage}/>
    </Switch>
    </>
  );
}

export default App;
