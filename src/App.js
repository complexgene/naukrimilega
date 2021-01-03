import "./css/App.css";
import LogoBanner from "./components/logobanner";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <LogoBanner />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
