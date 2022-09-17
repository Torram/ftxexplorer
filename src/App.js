import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Collections from "./pages/Collections/Collections";
import Collection from "./pages/Collection/Collection";
import Nft from "./pages/Nft/Nft";
import Footer from "./layout/footer/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/collections" element={<Navigate replace to="/collections/25/1"/>}/>
          <Route exact path="/collections/:count/:page" element={<Collections/>}/>
          <Route exact path="/collection/:name" element={<Collection/>}/>
          <Route exact path="/nft/:id" element = {<Nft/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
      
  );
}

export default App;
