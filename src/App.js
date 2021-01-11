import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, MainPage, DirDetail, MyPage } from "./pages";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import { RecoilRoot } from "recoil";
// import ProfileFixModal from "./components/ProfileFixModal";

function App() {
  const isLoggined = true;

  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              {isLoggined ? <LoginPage /> : <MainPage />}
            </Route>
            <Route path="/directory/:dirId" exact>
              <DirDetail />
            </Route>
            <Route path="/mypage/:userId" exact>
              <MyPage />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
