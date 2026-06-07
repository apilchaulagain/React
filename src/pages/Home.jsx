import MovieCard from "../component/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "john wick", release_date: "2020" },
    { id: 2, title: "terminator", release_date: "2015" },
    { id: 3, title: "minions", release_date: "2005" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    //alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movie.."
          className="search-input"
          value={searchQuery}
          //automatically updates the page so that when typed it automatically updates the page
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>          (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home
