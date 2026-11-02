import React from "react";
import MarketingApp from "./components/marketing";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

const generateClassname = createGenerateClassName({
  productionPrefix: 'co'
})

const App = () => {
  return (
    <BrowserRouter>
    <StylesProvider generateClassName={generateClassname}>
      <div>
        <Header />
        <MarketingApp />
      </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
