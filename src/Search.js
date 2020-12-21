import React, {Component, useState} from 'react'
import MovieCard from './MovieCard'

function Search(){

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=7619231026c603823636130b344849dc&language=en-US&query=${query}&page=1&include_adult=false`
        
        try{
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        }catch(err){
            console.error(err)
        }
    }
    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="Search"
                    value={query} onChange={(e) => setQuery(e.target.value)}>
                </input>
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>

        </>
    )
}

 
export default Search