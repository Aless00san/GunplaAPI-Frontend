//This service will handle API calls to grade endpoint

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/grade';

export const gradeList = () => {
  return axios.get(API_URL + '/list');
};

export const gradeByName = async name => {
  try {
    const grades = await gradeList();
    if (grades) {
      return grades.data.find(g => g.name === name);
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
