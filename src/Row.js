import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import requests from "./requests";

const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.table(movies);
  return (
    <div className="row">
      <h4>{title}</h4>
      <div className="row__posters">
        {/* row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* title */}
      {/* container -> posters */}
    </div>
  );
}

export default Row;
