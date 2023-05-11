import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API = process.env.NEXT_PUBLIC_API;

export const getGenres = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/genre/movie/list?api_key=${API}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
