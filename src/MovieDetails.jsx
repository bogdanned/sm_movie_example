// MovieDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movieClient from "./movieClient";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await movieClient.fetchMovieDetails(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1>{movie.title}</h1>
      {/* Render other movie details here */}
    </div>
  );
};

export default MovieDetails;
