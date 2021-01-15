import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, DirDetail, MyPage, LandingPage } from "./pages";
import GlobalStyles from "./GlobalStyles";
import { RecoilRoot } from "recoil";
// import ProfileFixModal from "./components/ProfileFixModal";

function App() {
  // const isLoggined = JSON.parse(localStorage.getItem("isLogin"));
  // console.log(isLoggined);

  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Router>
          <Switch>
            <Route path="/" exact>
              {!JSON.parse(localStorage.getItem("isLogin")) ? (
                <LoginPage />
              ) : (
                <LandingPage />
              )}
            </Route>
            <Route path="/share/:key" exact>
              <DirDetail />
            </Route>
            <Route path="/directory/:dirId" exact>
              <DirDetail />
            </Route>
            <Route path="/mypage" exact>
              <MyPage />
            </Route>
            <Route path="/landing" exact>
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
