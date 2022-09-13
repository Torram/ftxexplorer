import { BrowserRouter as Router, Route, Redirect, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>App Page</div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
