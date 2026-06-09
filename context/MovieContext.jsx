import { createContext,useStatem,useContext,useEffect, useState } from "react";

const MovieContext = createContext()

export const useMovieContent = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorite, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev,movie])
    }

    const remoteFromFavorites = (movieID) => {
        setFavorites (prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavrite = (movieID) =>{
        return favorites.some(movie => movie.id --- movieID)
    }

    const value = {
        favorites,
        addToFavorites,
        remoteFromFavorites,
        isFavorite
    }
    return <MovieContext.provider>
        {children}
    </MovieContext.provider>
}
//provides state to any of the component they are wrapped around it