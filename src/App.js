import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, MainPage } from "./pages";
import DirDetail from "./pages/DirDetail";

function App() {
  const isLoggined = true;

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isLoggined ? <LoginPage /> : <MainPage />}
        </Route>
        <Route path="/directory/:dirId/:userId" exact>
          <DirDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
