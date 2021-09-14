import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">CV Generator</h1>
      </header>
      {/* <Header /> */}
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
