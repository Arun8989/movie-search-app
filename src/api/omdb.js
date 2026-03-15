import axios from "axios";

const API_KEY = "82a3473";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1, type = "") => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
      page: page,
      type: type
    }
  });

  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
      plot: "full"
    }
  });

  return response.data;
};