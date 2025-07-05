import axios from "axios";

const API_URL = "http://localhost:8080/api/gunpla";

const initList = [
  {
    id: 1,
    name: "M1 Astray",
    grade: "HG",
    series: "Seed",
  },
  {
    id: 2,
    name: "Astray Red Frame",
    grade: "HG",
    series: "Seed Astray",
  },
];

const entry = {
  id: 0,
  name: "",
  grade: "",
  series: "",
};

//Fetch from API localhost:8080//api/gunpla/list
const jsonList = async () => {
  try {
    const response = await axios.get(API_URL + "/list");
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [{ id: 0, name: "", grade: "", serie: "" }];
};

export const list = () => {
  return initList;
};

export const mockEntry = () => {
  return entry;
};

export const fetchedList = () => {
  return jsonList();
};
