import React from "react";
import theme from "@styles/theme";
import Home from "@views/Home/Home";
import { ThemeProvider } from "@emotion/react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
