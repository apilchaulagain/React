import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favorite />} />
        </Routes>
      </main>
      </div>
  );
}

export default App;
