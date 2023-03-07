import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import LandingPage from './components/LandingPage';
import SignupFormPage from "./components/SignupFormPage";
import LoginForm from './components/LoginFormPage/LoginForm';
import UserIndexPage from './components/UserIndexPage';
import StoryShowPage from './components/Stories/StoryShowPage';
import StoryFormPage from './components/Stories/StoryFormPage';
import UpdateStoryFormPage from './components/Stories/UpdateStoryFormPage';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/signup" component={SignupFormPage}/>
      <Route exact path="/login" component={LoginForm}/> 
      <Route exact path="/@profile" component={UserIndexPage}/>
      <Route exact path="/stories/:storyId" component={StoryShowPage}/>
      <Route exact path="/stories" component={StoryFormPage}/>
      <Route exact path="/stories/:storyId/update" component={UpdateStoryFormPage}/>
    </Switch>
    </>
  );
}

export default App;
