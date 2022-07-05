import "./App.css";
import CardWrap from "./components/CardWrap";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-holder">
        <CardWrap />
      </div>
    </div>
  );
}

export default App;
