import React, { lazy, Suspense, useState, useEffect } from "react";
import Header from "./components/Header";
import ProgressBar from "./components/progress"
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {createBrowserHistory} from 'history';

const MarketingAppLazy = lazy(() => import("./components/marketing"));
const AuthAppLazy = lazy(() => import("./components/auth"));
const DashboardLazy = lazy(() => import('./components/dashboard'))

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if(isAuthenticated){
      history.push('/dashboard');
    }
  }, [isAuthenticated]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassname}>
        <Header signedIn={isAuthenticated} onSignOut={() => setIsAuthenticated(false)}/>
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={() => setIsAuthenticated(true)}/>
            </Route>
            <Route path="/dashboard" >
              {!isAuthenticated && <Redirect path='/' />}
              <DashboardLazy />
            </Route>
            <Route path="/">
              <MarketingAppLazy />
            </Route>
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};

export default App;
