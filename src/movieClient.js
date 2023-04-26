// movieClient.js
const API_KEY = "affc0edf3f789f9357f1d525ba2cdd23"; // ADD THE KEY HERE!
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovies = async (search, page) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}&page=${page}`
  );
  const data = await response.json();
  return data;
};

// movieClient.js
const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export default { fetchMovies, fetchMovieDetails };
