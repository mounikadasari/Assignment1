import logo from "./assets/logo.jpg";
import "./App.css";
import FoodWebPage from "./components/FoodWebPage";

function App() {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="app">
        <FoodWebPage /></div>
    </>
  );
}

export default App;
