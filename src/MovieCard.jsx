// MovieCard.js
import React from "react";

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w342";

const MovieCard = ({ movie }) => {
  const posterUrl = `${POSTER_BASE_URL}${movie.poster_path}`;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={posterUrl} alt={movie.title} className="w-full" />
      <div className="p-4">
        <h3 className="font-bold text-xl">{movie.title}</h3>
        <p className="text-gray-700 mt-2 truncate-2-lines">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
