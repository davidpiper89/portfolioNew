import "./App.css";
import Header from "./components/header/Header";
import Biography from "./components/biography/Biography";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="container">
      <Header />
      <Biography />
      <Portfolio />
    </div>
  );
}

export default App;
