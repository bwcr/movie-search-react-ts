import axios from "axios";

const API = process.env.NEXT_PUBLIC_API;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const search = async (query: string) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/search/movie?api_key=${API}&query=${query}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovie = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/movie/${id}?api_key=${API}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieLatest = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/movie/latest?api_key=${API}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieNowPlaying = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/now_playing?api_key=${API}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const searchMovies = async (query: string, page: number = 1) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/search/movie?api_key=${API}&query=${query}&page=${page}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMoviePopular = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/movie/popular?api_key=${API}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieTopRated = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/top_rated?api_key=${API}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieUpcoming = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/upcoming?api_key=${API}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieCredits = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}/credits?api_key=${API}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieRecommendations = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}/recommendations?api_key=${API}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSimilarMovies = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}/similar?api_key=${API}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMovieTrailer = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/movie/${id}/videos?api_key=${API}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
