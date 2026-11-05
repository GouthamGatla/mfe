import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import SignUp from './components/Signup'
import SignIn from './components/Signin'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

const App = ({history}) => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signup" component={SignUp}/>
            <Route path="/auth/signin" component={SignIn}/>
          </Switch>
        </Router>
      </StylesProvider>
    </>
  );
};

export default App
