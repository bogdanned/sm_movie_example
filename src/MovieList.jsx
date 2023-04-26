// MovieList.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchBox from "./SearchBox";
import movieClient from "./movieClient";

const getQueryParams = (search) => {
  const queryParams = new URLSearchParams(search);
  return {
    search: queryParams.get("search") || "",
    page: parseInt(queryParams.get("page")) || 1
  };
};

const MovieList = () => {
  const location = useLocation();
  const { search, page } = getQueryParams(location.search);

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAndSetMovies = async () => {
      const data = await movieClient.fetchMovies(search, currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };

    fetchAndSetMovies();
  }, [search, currentPage]);

  const handlePageChange = (newPage) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", newPage);
    location.search = queryParams.toString();
  };

  return (
    <div className="container mx-auto">
      <SearchBox
        initialSearch={search}
        onSubmit={(searchInput) => {
          const queryParams = new URLSearchParams(location.search);
          queryParams.set("search", searchInput);
          queryParams.set("page", 1);
          location.search = queryParams.toString();
        }}
      />

      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center my-4 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 ${
              currentPage === i + 1 ? "bg-blue-500" : "bg-blue-200"
            } text-white rounded`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
