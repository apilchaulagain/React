import "../css/MovieCard.css";

function Moviecard({movie}){

    function onlike(){
        //alert("click")
    }
    return  <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
            <button className="like-btn" onClick={onlike}>♡  
            </button>
            </div>
        </div>
        <div className="movie-info"> 
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default Moviecard