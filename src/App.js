import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, MainPage, DirDetail, MyPage } from "./pages";
import GlobalStyles from "./GlobalStyles";
import ProfileFixModal from "./components/ProfileFixModal";

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
    // <>
    // <DirDetail></DirDetail>
    // <ProfileFixModal/>
    // </>
  );
}

export default App;
