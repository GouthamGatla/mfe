import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import ProgressBar from "./components/progress"
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const MarketingAppLazy = lazy(() => import("./components/marketing"));
const AuthAppLazy = lazy(() => import("./components/auth"));

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <Header signedIn={isAuthenticated} onSignOut={() => setIsAuthenticated(false)}/>
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={() => setIsAuthenticated(true)}/>
            </Route>
            <Route path="/">
              <MarketingAppLazy />
            </Route>
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
