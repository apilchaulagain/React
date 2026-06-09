import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import NavBar from "./component/NavBar";
import { MovieProvider } from "../context/MovieContext";

function App() {
return (
  <div>
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  </div>
);
}

export default App;
