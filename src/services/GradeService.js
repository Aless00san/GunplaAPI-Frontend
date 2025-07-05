import axios from "axios";

//Service with a mock list and a function to fetch from API
const API_URL = "http://localhost:8080/api/grade";
export const GradeService = {
  list: [
    { id: 1, name: "HG", fullName: "High Grade" },
    { id: 2, name: "MG", fullName: "Master Grade" },
    { id: 3, name: "PG", fullName: "Perfect Grade" },
    { id: 4, name: "SD", fullName: "Super Deformed" },
  ],
};

export const gradeList = () => {
  return axios.get(API_URL + "/list")
};