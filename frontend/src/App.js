import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from "./components/SignupFormPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
    <LandingPage />
    {/* <Switch> */}
      <Route path="/signup">
        <SignupFormPage />
      </Route>
    {/* </Switch> */}
    </>
  );
}

export default App;
