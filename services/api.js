const API_KEY = "73c2bbddd8e21c454e778afabb2f3921";
const BASE_URL = "https://api.themoviedb.org";

export const getPopularMovies = async () => {
    const response = await fetch(`&{BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};
//added for push