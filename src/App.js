import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage, MainPage, DirDetail, MyPage } from "./pages";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import { RecoilRoot } from "recoil";
// import ProfileFixModal from "./components/ProfileFixModal";

function App() {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));
  console.log(isLogin);

  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Router>
          {/* <Header /> 'loginpage에도 헤더가 뜹니다...' */}
          <Switch>
            <Route path="/" exact>
              {isLogin ? <MainPage /> : <LoginPage /> }
            </Route>
            <Route path="/shared/:key" exact>
              <DirDetail />
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
