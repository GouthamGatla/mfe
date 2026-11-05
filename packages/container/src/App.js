import React, { lazy, Suspense } from "react";
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
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <Header />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth" component={AuthAppLazy} />
            <Route path="/" component={MarketingAppLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
