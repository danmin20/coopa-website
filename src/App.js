import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, MainPage, DirDetail, MyPage } from "./pages";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";

function App() {
  const isLoggined = true;

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            {isLoggined ? <LoginPage /> : <MainPage />}
          </Route>
          <Route path="/directory/:dirId/:userId" exact>
            <DirDetail />
          </Route>
          <Route path="/mypage/:userId" exact>
            <MyPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
