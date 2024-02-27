import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";
const api = {
  getAllCountries: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/all`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all countries:", error);
      throw error;
    }
  },

  getCountriesByName: async (name) => {
    try {
      const response = await axios.get(`${BASE_URL}/name/${name}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching countries by name ${name}:`, error);
      throw error;
    }
  },

  getCountriesByRegion: async (region) => {
    try {
      const response = await axios.get(`${BASE_URL}/region/${region}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching countries by region ${region}:`, error);
      throw error;
    }
  },
};
export default api;
