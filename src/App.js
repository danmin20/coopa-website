import { LoginPage, MainPage } from "./pages";

function App() {
  const isLoggined = true;

  return <div className="App">{isLoggined ? <LoginPage /> : <MainPage />}</div>;
}

export default App;
