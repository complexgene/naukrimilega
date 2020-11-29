import "./App.css";
import JobsBox from "./components/jobs";
import Navbar from "./components/navbar";
import Search from "./components/search";

function App() {
  return (
    <div>
      <Navbar />
      <div className="top-info">
        <div className="top-info-bar">
          <JobsBox />
        </div>
        <Search />
      </div>
    </div>
  );
}

export default App;
