import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API;

export const getRegions = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/watch/providers/regions?api_key=${API_KEY}`
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
