//This service will handle API calls to gunpla endpoint

import axios from "axios";
import { api } from "./AuthService";

const API_URL = "http://localhost:8080/api/gunpla";

const entry = {
  id: 0,
  name: "",
  grade: "",
  series: "",
};

//Fetch from API localhost:8080//api/gunpla/list
export const jsonList = async () => {
  try {
    const response = await axios.get(API_URL + "api/gunpla/list", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [{ id: 0, name: "", grade: "", serie: "" }];
};

export const mockEntry = () => {
  return entry;
};

export const gunplaList = () => {
  return api.get("api/gunpla/list", { withCredentials: true });
};

export const create = async ({ name, grade, series }) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/gunpla",
      {
        name,
        grade,
        series,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const update = async (id, gunpla) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/api/gunpla/${encodeURIComponent(id)}`,
      {
        name: gunpla.name,
        grade: gunpla.grade,
        series: gunpla.series,
      },
      {
        withCredentials: true,
      }
    );
    console.log("Gunpla updated", response);
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
