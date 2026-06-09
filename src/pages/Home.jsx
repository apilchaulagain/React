import MovieCard from "../component/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { SearchMovies, getPopularMovies } from "../../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load movies..");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []); //calls the function inside when the array in the "[]" is called,
  //  and doesnt change when the funcntion is renndered again, runs only one time

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return
    setLoading(true)
    try{
      const searchResults = await SearchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    }
    catch (err){
      console.log(err)
      setError("failed to search or movies")
    }
    finally{
      setLoading(false)
    }
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
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-class">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
