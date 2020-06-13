import React, { useState, Fragment } from "react";

function SearchMovies(props) {

    const { setMovies } = props;
    const [query, setQuery] = useState('');

    const searchMovie = async (e) => {
        e.preventDefault();
        if (query) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=546d3eb6fa2be167b1c8ee6cb35f7bd2&language=en-US&query=${query}&page=1&include_adult=false`;
            try {
                const res = await fetch(url);
                const data_result = await res.json();
                setMovies([...(data_result.results)]);
            } catch (err) {
                console.error(err);
            }
        }
    }
    const changeMovie = (e) => {
        const newValue = e.target.value;
        setQuery(newValue);
    }
    return <>
        <form className="form" onSubmit={searchMovie}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" onChange={changeMovie} value={query} type="text" name="query" placeholder="i.e Maanjhi" />
            <button className="button" type="submit">Search</button>
        </form>

    </>
}

export default SearchMovies;