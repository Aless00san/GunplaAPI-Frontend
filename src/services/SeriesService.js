//Service with a mock list and a function to fetch from API
import axios from "axios";

const API_URL = "http://localhost:8080/api/series";
export const SeriesService = {
  list: [
    { id: 1, name: "Seed", fullName: "Seed" },
    { id: 2, name: "Seed Astray", fullName: "Seed Astray" },
  ],
};


export const seriesList = () => {
  return axios.get(API_URL + "/list")
};